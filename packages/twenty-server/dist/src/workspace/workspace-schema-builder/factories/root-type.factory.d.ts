import { GraphQLObjectType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { WorkspaceResolverBuilderMethodNames } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
import { TypeMapperService } from 'src/workspace/workspace-schema-builder/services/type-mapper.service';
import { ArgsFactory } from './args.factory';
export declare enum ObjectTypeName {
    Query = "Query",
    Mutation = "Mutation",
    Subscription = "Subscription"
}
export declare class RootTypeFactory {
    private readonly typeDefinitionsStorage;
    private readonly typeMapperService;
    private readonly argsFactory;
    private readonly logger;
    constructor(typeDefinitionsStorage: TypeDefinitionsStorage, typeMapperService: TypeMapperService, argsFactory: ArgsFactory);
    create(objectMetadataCollection: ObjectMetadataInterface[], workspaceResolverMethodNames: WorkspaceResolverBuilderMethodNames[], objectTypeName: ObjectTypeName, options: WorkspaceBuildSchemaOptions): GraphQLObjectType;
    private generateFields;
}
