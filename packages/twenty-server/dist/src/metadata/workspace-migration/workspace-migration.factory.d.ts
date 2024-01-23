import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { BasicColumnActionFactory } from 'src/metadata/workspace-migration/factories/basic-column-action.factory';
import { EnumColumnActionFactory } from 'src/metadata/workspace-migration/factories/enum-column-action.factory';
import { WorkspaceMigrationColumnAction, WorkspaceMigrationColumnActionType } from 'src/metadata/workspace-migration/workspace-migration.entity';
export declare class WorkspaceMigrationFactory {
    private readonly basicColumnActionFactory;
    private readonly enumColumnActionFactory;
    private readonly logger;
    private factoriesMap;
    constructor(basicColumnActionFactory: BasicColumnActionFactory, enumColumnActionFactory: EnumColumnActionFactory);
    createColumnActions(action: WorkspaceMigrationColumnActionType.CREATE, fieldMetadata: FieldMetadataInterface): WorkspaceMigrationColumnAction[];
    createColumnActions(action: WorkspaceMigrationColumnActionType.ALTER, currentFieldMetadata: FieldMetadataInterface, alteredFieldMetadata: FieldMetadataInterface): WorkspaceMigrationColumnAction[];
    private createColumnAction;
}
