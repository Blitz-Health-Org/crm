import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddIdentifierFieldToObjectMetadata1700565712112 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
