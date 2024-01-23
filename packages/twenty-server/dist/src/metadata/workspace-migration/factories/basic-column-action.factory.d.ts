import { Logger } from '@nestjs/common';
import { WorkspaceColumnActionOptions } from 'src/metadata/workspace-migration/interfaces/workspace-column-action-options.interface';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { WorkspaceMigrationColumnAlter, WorkspaceMigrationColumnCreate } from 'src/metadata/workspace-migration/workspace-migration.entity';
import { ColumnActionAbstractFactory } from 'src/metadata/workspace-migration/factories/column-action-abstract.factory';
export type BasicFieldMetadataType = FieldMetadataType.UUID | FieldMetadataType.TEXT | FieldMetadataType.PHONE | FieldMetadataType.EMAIL | FieldMetadataType.NUMERIC | FieldMetadataType.NUMBER | FieldMetadataType.PROBABILITY | FieldMetadataType.BOOLEAN | FieldMetadataType.DATE_TIME;
export declare class BasicColumnActionFactory extends ColumnActionAbstractFactory<BasicFieldMetadataType> {
    protected readonly logger: Logger;
    protected handleCreateAction(fieldMetadata: FieldMetadataInterface<BasicFieldMetadataType>, options?: WorkspaceColumnActionOptions): WorkspaceMigrationColumnCreate;
    protected handleAlterAction(currentFieldMetadata: FieldMetadataInterface<BasicFieldMetadataType>, alteredFieldMetadata: FieldMetadataInterface<BasicFieldMetadataType>, options?: WorkspaceColumnActionOptions): WorkspaceMigrationColumnAlter;
    private getDefaultValue;
}
