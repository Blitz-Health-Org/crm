import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SetupMetadataTables1700140427984 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
