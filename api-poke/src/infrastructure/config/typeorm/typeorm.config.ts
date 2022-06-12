import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Pokemon } from "../../entities/pokemon.entity"

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env/local.env' });
}

const dataSource : DataSourceOptions = {
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
  logging: true,
  logger: 'advanced-console',
  migrations: ['database/migrations/**/*{.ts,.js}']
};

/*dataSource.initialize().then(
  (dataSource) => {
      let pokemon = new Pokemon()
      pokemon.name = "Pokemon"
      pokemon.clase = "Electronico"
      pokemon.power = "Pokemon que baila techno, toma agua y vew weas vee weas ve weas."

      let pokemonRepository = dataSource.getRepository(Pokemon)

      pokemonRepository
          .save(pokemon)
          .then((pokemon) => console.log("Pokemon has been saved ___-------------------------------"))
          .catch((error) => console.log("Cannot save. Error: ", error))
  },
  (error) => console.log("Cannot connect: ", error),
)
*/
console.log(dataSource);

export default dataSource;
