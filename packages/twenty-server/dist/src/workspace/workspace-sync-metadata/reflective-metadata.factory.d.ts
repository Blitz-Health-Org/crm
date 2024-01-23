import { PartialObjectMetadata } from 'src/workspace/workspace-sync-metadata/interfaces/partial-object-metadata.interface';
import { MappedObjectMetadataEntity } from 'src/workspace/workspace-sync-metadata/interfaces/mapped-metadata.interface';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
export declare class ReflectiveMetadataFactory {
    createObjectMetadata(metadata: typeof BaseObjectMetadata, workspaceId: string, defaultDataSourceId: string, workspaceFeatureFlagsMap: Record<string, boolean>): Promise<PartialObjectMetadata | undefined>;
    createObjectMetadataCollection(metadataCollection: (typeof BaseObjectMetadata)[], workspaceId: string, dataSourceId: string, workspaceFeatureFlagsMap: Record<string, boolean>): Promise<PartialObjectMetadata[]>;
    createRelationMetadata(metadata: typeof BaseObjectMetadata, workspaceId: string, objectMetadataFromDB: Record<string, MappedObjectMetadataEntity>, workspaceFeatureFlagsMap: Record<string, boolean>): {
        relationType: import("../../metadata/relation-metadata/relation-metadata.entity").RelationMetadataType;
        fromObjectMetadataId: string;
        toObjectMetadataId: string;
        fromFieldMetadataId: string;
        toFieldMetadataId: string;
        workspaceId: string;
    }[];
    createRelationMetadataCollection(metadataCollection: (typeof BaseObjectMetadata)[], workspaceId: string, objectMetadataFromDB: Record<string, MappedObjectMetadataEntity>, workspaceFeatureFlagsMap: Record<string, boolean>): {
        relationType: import("../../metadata/relation-metadata/relation-metadata.entity").RelationMetadataType;
        fromObjectMetadataId: string;
        toObjectMetadataId: string;
        fromFieldMetadataId: string;
        toFieldMetadataId: string;
        workspaceId: string;
    }[];
}
