import { Logger } from '@nestjs/common';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { WorkspaceColumnActionOptions } from 'src/metadata/workspace-migration/interfaces/workspace-column-action-options.interface';
import { WorkspaceColumnActionFactory } from 'src/metadata/workspace-migration/interfaces/workspace-column-action-factory.interface';
import { WorkspaceMigrationColumnActionType, WorkspaceMigrationColumnAction, WorkspaceMigrationColumnCreate, WorkspaceMigrationColumnAlter } from 'src/metadata/workspace-migration/workspace-migration.entity';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
export declare class ColumnActionAbstractFactory<T extends FieldMetadataType | 'default'> implements WorkspaceColumnActionFactory<T> {
    protected readonly logger: Logger;
    create(action: WorkspaceMigrationColumnActionType.CREATE | WorkspaceMigrationColumnActionType.ALTER, currentFieldMetadata: FieldMetadataInterface<T> | undefined, alteredFieldMetadata: FieldMetadataInterface<T>, options?: WorkspaceColumnActionOptions): WorkspaceMigrationColumnAction;
    protected handleCreateAction(_fieldMetadata: FieldMetadataInterface<T>, _options?: WorkspaceColumnActionOptions): WorkspaceMigrationColumnCreate;
    protected handleAlterAction(_currentFieldMetadata: FieldMetadataInterface<T>, _alteredFieldMetadata: FieldMetadataInterface<T>, _options?: WorkspaceColumnActionOptions): WorkspaceMigrationColumnAlter;
}
