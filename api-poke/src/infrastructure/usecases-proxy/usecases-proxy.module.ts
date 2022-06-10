import { DynamicModule, Module } from '@nestjs/common';

import { GetPokemonUseCases } from '../../usecases/pokemon/getPokemon.usecases';


import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';

import { RepositoriesModule } from '../repositories/repositories.module';

import { DatabasePokemonRepository } from '../repositories/pokemon.repository';

import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';

import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [LoggerModule, EnvironmentConfigModule, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {

  static GET_POKEMON_USECASES_PROXY = 'getPokemonUsecasesProxy';


  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabasePokemonRepository],
          provide: UsecasesProxyModule.GET_POKEMON_USECASES_PROXY,
          useFactory: (pokemonRepository: DatabasePokemonRepository) => new UseCaseProxy(new GetPokemonUseCases(pokemonRepository)),
          //useFactory: (logger: LoggerService, pokemonRepository: DatabasePokemonRepository) =>
            //new UseCaseProxy(new GetPokemonUseCases(logger, pokemonRepository)),
        },
      ],
      exports: [
        UsecasesProxyModule.GET_POKEMON_USECASES_PROXY,
      ],
    };
  }
}
