import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddFeatureFlags1701194529853 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
