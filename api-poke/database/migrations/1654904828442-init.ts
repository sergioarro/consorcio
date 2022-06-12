import {MigrationInterface, QueryRunner} from "typeorm";
import { Pokemon } from "../../src/infrastructure/entities/pokemon.entity";

export class init1654904828442 implements MigrationInterface {
    name = 'init1654904828442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        //const pokemonRepo = queryRunner.connection.getRepository(Pokemon);
        await queryRunner.query(`CREATE TABLE "public"."pokemon" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "clase" character varying(200), "power" character varying(200), UNIQUE ("name"), PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b67337b7f8aa8406e936c2ff75" ON "public"."pokemon" ("name") `);
        //await queryRunner.query(`INSERT INTO "public"."pokemon" (name, clase, power) VALUES ("Pikachu","Eléctronico","Pokemon que baila techno y ve weas vee weas ve weas.")`);
        //await queryRunner.query(`INSERT INTO "public"."pokemon" (name, clase, power) VALUES ("Fenix","Legendario","Pokemon super sayayin, el que la lleva!.")`);
        /*await pokemonRepo.save([
            {
				name: 'Pikachu',
				clase: 'Eléctronico',
				power: 'Pokemon que baila techno y ve weas vee weas ve weas.'
			}
        ])*/
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_5168b0a7e7a11bba2f22b8d7fe"`);
        await queryRunner.query(`DROP TABLE "public"."pokemon"`);
    }

}
