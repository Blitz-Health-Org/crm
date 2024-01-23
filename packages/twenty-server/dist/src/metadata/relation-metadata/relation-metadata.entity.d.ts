import { RelationMetadataInterface } from 'src/metadata/field-metadata/interfaces/relation-metadata.interface';
import { FieldMetadataEntity } from 'src/metadata/field-metadata/field-metadata.entity';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare enum RelationMetadataType {
    ONE_TO_ONE = "ONE_TO_ONE",
    ONE_TO_MANY = "ONE_TO_MANY",
    MANY_TO_MANY = "MANY_TO_MANY"
}
export declare class RelationMetadataEntity implements RelationMetadataInterface {
    id: string;
    relationType: RelationMetadataType;
    fromObjectMetadataId: string;
    toObjectMetadataId: string;
    fromFieldMetadataId: string;
    toFieldMetadataId: string;
    workspaceId: string;
    fromObjectMetadata: ObjectMetadataEntity;
    toObjectMetadata: ObjectMetadataEntity;
    fromFieldMetadata: FieldMetadataEntity;
    toFieldMetadata: FieldMetadataEntity;
    createdAt: Date;
    updatedAt: Date;
}
