import { PokemonM } from '../model/pokemon';

export interface PokemonRepository {
  getPokemonByName(name: string): Promise<PokemonM>;
}
