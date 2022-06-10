import { PokemonM } from '../../domain/model/pokemon';
import { PokemonRepository } from '../../domain/repositories/pokemonRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';

export class GetPokemonUseCases {
  //constructor(private readonly pokemonRepository: PokemonRepository) {}
  constructor(private readonly logger: ILogger, private readonly pokemonRepository: PokemonRepository) {}

  async execute(name: string): Promise<PokemonM> {
    this.logger.log('getPokemonByName execute', `Pokemon ${name}`);
    return await this.pokemonRepository.getPokemonByName(name);
  }
}
