import { Body, Controller, Delete, Get, Inject, Post, Put, Query, Param } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { GetPokemonUseCases } from '../../../usecases/pokemon/getPokemon.usecases';
import { PokemonPresenter } from './pokemon.presenter';
import { ApiResponseType } from '../../common/swagger/response.decorator';
import { PokemonDto } from './pokemon.dto';

@Controller('pokemon')
@ApiTags('pokemon')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(PokemonPresenter)
export class PokemonController {
  constructor(
    @Inject(UsecasesProxyModule.GET_POKEMON_USECASES_PROXY)
    private readonly getPokemonUsecaseProxy: UseCaseProxy<GetPokemonUseCases>,
  ) {}

  @Get(':name')
  @ApiResponseType(PokemonPresenter, false)
  @ApiOperation({ description: 'getPokemon' })
  async getPokemon(@Param('name') name : string) {
    const pokemon = await this.getPokemonUsecaseProxy.getInstance().execute(name);
    return new PokemonPresenter(pokemon);
  }
}
