import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Pokemon } from '../entities/pokemon.entity';
import { DatabasePokemonRepository } from './pokemon.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Pokemon])],
  providers: [DatabasePokemonRepository],
  exports: [DatabasePokemonRepository],
})
export class RepositoriesModule {}
