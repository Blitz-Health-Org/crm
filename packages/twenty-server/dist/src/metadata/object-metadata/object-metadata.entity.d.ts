import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { FieldMetadataEntity } from 'src/metadata/field-metadata/field-metadata.entity';
import { RelationMetadataEntity } from 'src/metadata/relation-metadata/relation-metadata.entity';
import { DataSourceEntity } from 'src/metadata/data-source/data-source.entity';
export declare class ObjectMetadataEntity implements ObjectMetadataInterface {
    id: string;
    dataSourceId: string;
    nameSingular: string;
    namePlural: string;
    labelSingular: string;
    labelPlural: string;
    description: string;
    icon: string;
    targetTableName: string;
    isCustom: boolean;
    isActive: boolean;
    isSystem: boolean;
    labelIdentifierFieldMetadataId?: string;
    imageIdentifierFieldMetadataId?: string;
    workspaceId: string;
    fields: FieldMetadataEntity[];
    fromRelations: RelationMetadataEntity[];
    toRelations: RelationMetadataEntity[];
    dataSource: DataSourceEntity;
    createdAt: Date;
    updatedAt: Date;
}
