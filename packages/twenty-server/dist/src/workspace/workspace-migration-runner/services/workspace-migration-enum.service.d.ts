import { QueryRunner } from 'typeorm';
import { WorkspaceMigrationColumnAlter } from 'src/metadata/workspace-migration/workspace-migration.entity';
export declare class WorkspaceMigrationEnumService {
    alterEnum(queryRunner: QueryRunner, schemaName: string, tableName: string, migrationColumn: WorkspaceMigrationColumnAlter): Promise<void>;
    private createNewEnumType;
    private migrateEnumValues;
    private handleMissingEnumValues;
    private updateColumnToNewEnum;
    private dropOldEnumType;
    private renameEnumType;
}
