import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Pokemon } from "../../infrastructure/entities/pokemon.entity"

export class PokemonCreateSeed implements Seeder {

    public async run(factory: Factory, connection: DataSource ): Promise<void> {
        const pokemonRepo = connection.getRepository(Pokemon);
        await pokemonRepo.insert([
            {
                name: 'Pikachu',
                clase: 'Eléctronico',
                power: 'Pokemon que baila techno y ve weas vee weas ve weas.'
            }
        ])

    }
}