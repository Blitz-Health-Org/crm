import { GraphQLSchema } from 'graphql';
import { WorkspaceResolverBuilderMethods } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { TypeDefinitionsGenerator } from './type-definitions.generator';
import { WorkspaceBuildSchemaOptions } from './interfaces/workspace-build-schema-optionts.interface';
import { QueryTypeFactory } from './factories/query-type.factory';
import { MutationTypeFactory } from './factories/mutation-type.factory';
import { OrphanedTypesFactory } from './factories/orphaned-types.factory';
export declare class WorkspaceGraphQLSchemaFactory {
    private readonly typeDefinitionsGenerator;
    private readonly queryTypeFactory;
    private readonly mutationTypeFactory;
    private readonly orphanedTypesFactory;
    private readonly logger;
    constructor(typeDefinitionsGenerator: TypeDefinitionsGenerator, queryTypeFactory: QueryTypeFactory, mutationTypeFactory: MutationTypeFactory, orphanedTypesFactory: OrphanedTypesFactory);
    create(objectMetadataCollection: ObjectMetadataInterface[], workspaceResolverBuilderMethods: WorkspaceResolverBuilderMethods, options?: WorkspaceBuildSchemaOptions): Promise<GraphQLSchema>;
}
