import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddEnumOptions1700663879152 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
