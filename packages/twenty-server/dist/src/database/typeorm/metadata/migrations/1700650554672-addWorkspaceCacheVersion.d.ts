import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddWorkspaceCacheVersion1700650554672 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
