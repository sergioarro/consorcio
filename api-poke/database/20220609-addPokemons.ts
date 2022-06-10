import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1648623447697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."pokemon" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "clase" character varying(200), "power" character varying(200), UNIQUE ("name"), PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b67337b7f8aa8406e936c2ff75" ON "public"."pokemon" ("name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_b67337b7f8aa8406e936c2ff75"`);
        await queryRunner.query(`DROP TABLE "public"."pokemon"`);
    }

}