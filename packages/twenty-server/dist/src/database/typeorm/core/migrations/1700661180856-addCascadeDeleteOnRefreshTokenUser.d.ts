import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCascadeDeleteOnRefreshTokenUser1700661180856 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
