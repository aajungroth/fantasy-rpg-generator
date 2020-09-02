import {MigrationInterface, QueryRunner} from "typeorm";

export class addSshKeyTables1599087225697 implements MigrationInterface {
    name = 'addSshKeyTables1599087225697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gamePublicKey" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(255) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(255) NOT NULL, "internalComment" character varying(255), "publicKey" character varying(1023) NOT NULL, CONSTRAINT "PK_0a152864c936bc0da65721037be" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "serverKeyPair" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(255) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(255) NOT NULL, "internalComment" character varying(255), "publicKey" character varying(1023) NOT NULL, "privateKey" character varying(4095) NOT NULL, CONSTRAINT "PK_9a7e512b27fbb913d598f92bb5e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "game" ADD "gamePublicKeyId" uuid NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "game" ADD CONSTRAINT "UQ_2711d4bb4e7314a1c8a1a1dba68" UNIQUE ("gamePublicKeyId")`, undefined);
        await queryRunner.query(`ALTER TABLE "game" ADD CONSTRAINT "FK_2711d4bb4e7314a1c8a1a1dba68" FOREIGN KEY ("gamePublicKeyId") REFERENCES "gamePublicKey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "game" DROP CONSTRAINT "FK_2711d4bb4e7314a1c8a1a1dba68"`, undefined);
        await queryRunner.query(`ALTER TABLE "game" DROP CONSTRAINT "UQ_2711d4bb4e7314a1c8a1a1dba68"`, undefined);
        await queryRunner.query(`ALTER TABLE "game" DROP COLUMN "gamePublicKeyId"`, undefined);
        await queryRunner.query(`DROP TABLE "serverKeyPair"`, undefined);
        await queryRunner.query(`DROP TABLE "gamePublicKey"`, undefined);
    }

}
