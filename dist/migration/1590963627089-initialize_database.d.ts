import { MigrationInterface, QueryRunner } from "typeorm";
export declare class initializeDatabase1590963627089 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
