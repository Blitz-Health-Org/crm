import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
export declare class RelationMetadataDTO {
    id: string;
    relationType: RelationMetadataType;
    fromObjectMetadataId: string;
    toObjectMetadataId: string;
    fromFieldMetadataId: string;
    toFieldMetadataId: string;
    workspaceId: string;
    createdAt: Date;
    updatedAt: Date;
}
