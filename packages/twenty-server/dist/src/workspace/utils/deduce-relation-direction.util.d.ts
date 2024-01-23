import { RelationMetadataInterface } from 'src/metadata/field-metadata/interfaces/relation-metadata.interface';
export declare enum RelationDirection {
    FROM = "from",
    TO = "to"
}
export declare const deduceRelationDirection: (currentObjectId: string, relationMetadata: RelationMetadataInterface) => RelationDirection;
