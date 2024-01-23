import { IResolvers } from '@graphql-tools/utils';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { UpdateManyResolverFactory } from 'src/workspace/workspace-resolver-builder/factories/update-many-resolver.factory';
import { DeleteManyResolverFactory } from 'src/workspace/workspace-resolver-builder/factories/delete-many-resolver.factory';
import { ExecuteQuickActionOnOneResolverFactory } from 'src/workspace/workspace-resolver-builder/factories/execute-quick-action-on-one-resolver.factory';
import { FindManyResolverFactory } from './factories/find-many-resolver.factory';
import { FindOneResolverFactory } from './factories/find-one-resolver.factory';
import { CreateManyResolverFactory } from './factories/create-many-resolver.factory';
import { CreateOneResolverFactory } from './factories/create-one-resolver.factory';
import { UpdateOneResolverFactory } from './factories/update-one-resolver.factory';
import { DeleteOneResolverFactory } from './factories/delete-one-resolver.factory';
import { WorkspaceResolverBuilderMethods } from './interfaces/workspace-resolvers-builder.interface';
export declare class WorkspaceResolverFactory {
    private readonly findManyResolverFactory;
    private readonly findOneResolverFactory;
    private readonly createManyResolverFactory;
    private readonly createOneResolverFactory;
    private readonly updateOneResolverFactory;
    private readonly deleteOneResolverFactory;
    private readonly executeQuickActionOnOneResolverFactory;
    private readonly updateManyResolverFactory;
    private readonly deleteManyResolverFactory;
    private readonly logger;
    constructor(findManyResolverFactory: FindManyResolverFactory, findOneResolverFactory: FindOneResolverFactory, createManyResolverFactory: CreateManyResolverFactory, createOneResolverFactory: CreateOneResolverFactory, updateOneResolverFactory: UpdateOneResolverFactory, deleteOneResolverFactory: DeleteOneResolverFactory, executeQuickActionOnOneResolverFactory: ExecuteQuickActionOnOneResolverFactory, updateManyResolverFactory: UpdateManyResolverFactory, deleteManyResolverFactory: DeleteManyResolverFactory);
    create(workspaceId: string, objectMetadataCollection: ObjectMetadataInterface[], workspaceResolverBuilderMethods: WorkspaceResolverBuilderMethods): Promise<IResolvers>;
}
