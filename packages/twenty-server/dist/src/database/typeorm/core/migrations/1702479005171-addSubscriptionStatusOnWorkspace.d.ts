import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddSubscriptionStatusOnWorkspace1702479005171 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
