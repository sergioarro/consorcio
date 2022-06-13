import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { PokemonController } from './pokemon/pokemon.controller';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [UsecasesProxyModule.register(), TerminusModule, HttpModule],
  controllers: [PokemonController, HealthController],
})
export class ControllersModule {}

