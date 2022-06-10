import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { PokemonController } from './pokemon/pokemon.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [PokemonController],
})
export class ControllersModule {}
