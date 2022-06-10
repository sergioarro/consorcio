import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Pokemon } from "../../entities/pokemon.entity"

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env/local.env' });
}

const config = new DataSource ({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: true,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  migrationsTableName: 'migration_pokemon',
  migrations: ['database/migrations/**/*{.ts,.js}']
});

config.initialize().then(
  (dataSource) => {
      let pokemon = new Pokemon()
      pokemon.name = "Pokemon"
      pokemon.clase = "Electronico"
      pokemon.power = "Pokemon que baila techno y ve weas vee weas ve weas."

      let pokemonRepository = config.getRepository(Pokemon)

      pokemonRepository
          .save(pokemon)
          .then((post) => console.log("Pokemon has been saved"))
          .catch((error) => console.log("Cannot save. Error: ", error))
  },
  (error) => console.log("Cannot connect: ", error),
)

console.log(config);

export default config;
