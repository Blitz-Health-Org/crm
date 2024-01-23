import { GraphQLSchema } from 'graphql';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { WorkspaceSchemaStorageService } from 'src/workspace/workspace-schema-storage/workspace-schema-storage.service';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { ScalarsExplorerService } from 'src/workspace/services/scalars-explorer.service';
import { WorkspaceGraphQLSchemaFactory } from './workspace-schema-builder/workspace-graphql-schema.factory';
import { WorkspaceResolverFactory } from './workspace-resolver-builder/workspace-resolver.factory';
export declare class WorkspaceFactory {
    private readonly dataSourceService;
    private readonly objectMetadataService;
    private readonly scalarsExplorerService;
    private readonly workspaceGraphQLSchemaFactory;
    private readonly workspaceResolverFactory;
    private readonly workspaceSchemaStorageService;
    constructor(dataSourceService: DataSourceService, objectMetadataService: ObjectMetadataService, scalarsExplorerService: ScalarsExplorerService, workspaceGraphQLSchemaFactory: WorkspaceGraphQLSchemaFactory, workspaceResolverFactory: WorkspaceResolverFactory, workspaceSchemaStorageService: WorkspaceSchemaStorageService);
    createGraphQLSchema(workspaceId: string | undefined): Promise<GraphQLSchema>;
}
