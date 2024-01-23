import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
export declare class CreateRelationInput {
    relationType: RelationMetadataType;
    fromObjectMetadataId: string;
    toObjectMetadataId: string;
    fromName: string;
    toName: string;
    fromLabel: string;
    toLabel: string;
    fromIcon?: string;
    toIcon?: string;
    description?: string;
    fromDescription?: string;
    toDescription?: string;
    workspaceId: string;
}
