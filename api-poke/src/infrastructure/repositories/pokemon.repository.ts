import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonM } from '../../domain/model/pokemon';
import { PokemonRepository } from '../../domain/repositories/userRepository.interface';
import { Pokemon } from '../entities/pokemon.entity';

@Injectable()
export class DatabasePokemonRepository implements PokemonRepository {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonEntityRepository: Repository<Pokemon>,
  ) {}

  async getPokemonByName(name: string): Promise<PokemonM> {
    const pokemonEntity = await this.pokemonEntityRepository.findOneOrFail({ 
        where: {
        name: name,
      }
    });
    return this.toPokemon(pokemonEntity);
  }

  private toPokemon(pokemonEntity: Pokemon): PokemonM {
    const pokemon: PokemonM = new PokemonM();

    pokemon.id = pokemonEntity.id;
    pokemon.name = pokemonEntity.name;
    pokemon.clase = pokemonEntity.clase;
    pokemon.power = pokemonEntity.power;

    return pokemon;
  }

  private toPokemonEntity(pokemon: PokemonM): Pokemon {
    const pokemonEntity: Pokemon = new Pokemon();

    pokemonEntity.id = pokemon.id;
    pokemonEntity.name = pokemon.name;
    pokemonEntity.clase = pokemon.clase;
    pokemonEntity.power = pokemon.power;

    return pokemonEntity;
  }
}
