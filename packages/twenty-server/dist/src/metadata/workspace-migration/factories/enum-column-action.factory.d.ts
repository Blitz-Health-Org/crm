import { Logger } from '@nestjs/common';
import { WorkspaceColumnActionOptions } from 'src/metadata/workspace-migration/interfaces/workspace-column-action-options.interface';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { WorkspaceMigrationColumnAlter, WorkspaceMigrationColumnCreate } from 'src/metadata/workspace-migration/workspace-migration.entity';
import { ColumnActionAbstractFactory } from 'src/metadata/workspace-migration/factories/column-action-abstract.factory';
export type EnumFieldMetadataType = FieldMetadataType.RATING | FieldMetadataType.SELECT | FieldMetadataType.MULTI_SELECT;
export declare class EnumColumnActionFactory extends ColumnActionAbstractFactory<EnumFieldMetadataType> {
    protected readonly logger: Logger;
    protected handleCreateAction(fieldMetadata: FieldMetadataInterface<EnumFieldMetadataType>, options: WorkspaceColumnActionOptions): WorkspaceMigrationColumnCreate;
    protected handleAlterAction(currentFieldMetadata: FieldMetadataInterface<EnumFieldMetadataType>, alteredFieldMetadata: FieldMetadataInterface<EnumFieldMetadataType>, options: WorkspaceColumnActionOptions): WorkspaceMigrationColumnAlter;
}
