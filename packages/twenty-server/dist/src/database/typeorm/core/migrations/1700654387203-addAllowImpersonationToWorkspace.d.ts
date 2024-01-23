import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddAllowImpersonationToWorkspace1700654387203 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
