import { ApiProperty } from '@nestjs/swagger';
import { PokemonM } from '../../../domain/model/pokemon';

export class PokemonPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  clase: string;
  @ApiProperty()
  power: string;

  constructor(pokemon: PokemonM) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.clase = pokemon.clase;
    this.power = pokemon.power;
  }
}
