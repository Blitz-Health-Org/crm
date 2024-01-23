import { GraphQLObjectType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { WorkspaceResolverBuilderQueryMethodNames } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { RootTypeFactory } from './root-type.factory';
export declare class QueryTypeFactory {
    private readonly rootTypeFactory;
    constructor(rootTypeFactory: RootTypeFactory);
    create(objectMetadataCollection: ObjectMetadataInterface[], workspaceResolverMethodNames: WorkspaceResolverBuilderQueryMethodNames[], options: WorkspaceBuildSchemaOptions): GraphQLObjectType;
}
