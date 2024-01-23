import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddWorkspaceDeleteCascadeSetNullInUser1700663611659 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
