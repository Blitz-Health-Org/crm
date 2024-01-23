import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { FieldMetadataTargetColumnMap } from 'src/metadata/field-metadata/interfaces/field-metadata-target-column-map.interface';
import { FieldMetadataDefaultValue } from 'src/metadata/field-metadata/interfaces/field-metadata-default-value.interface';
import { FieldMetadataOptions } from 'src/metadata/field-metadata/interfaces/field-metadata-options.interface';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
import { RelationMetadataEntity } from 'src/metadata/relation-metadata/relation-metadata.entity';
export declare enum FieldMetadataType {
    UUID = "UUID",
    TEXT = "TEXT",
    PHONE = "PHONE",
    EMAIL = "EMAIL",
    DATE_TIME = "DATE_TIME",
    BOOLEAN = "BOOLEAN",
    NUMBER = "NUMBER",
    NUMERIC = "NUMERIC",
    PROBABILITY = "PROBABILITY",
    LINK = "LINK",
    CURRENCY = "CURRENCY",
    FULL_NAME = "FULL_NAME",
    RATING = "RATING",
    SELECT = "SELECT",
    MULTI_SELECT = "MULTI_SELECT",
    RELATION = "RELATION"
}
export declare class FieldMetadataEntity<T extends FieldMetadataType | 'default' = 'default'> implements FieldMetadataInterface<T> {
    id: string;
    objectMetadataId: string;
    object: ObjectMetadataEntity;
    type: FieldMetadataType;
    name: string;
    label: string;
    targetColumnMap: FieldMetadataTargetColumnMap<T>;
    defaultValue: FieldMetadataDefaultValue<T>;
    description: string;
    icon: string;
    options: FieldMetadataOptions<T>;
    isCustom: boolean;
    isActive: boolean;
    isSystem: boolean;
    isNullable: boolean;
    workspaceId: string;
    fromRelationMetadata: RelationMetadataEntity;
    toRelationMetadata: RelationMetadataEntity;
    createdAt: Date;
    updatedAt: Date;
}
