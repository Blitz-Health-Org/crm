import { UpdateManyResolverFactory } from 'src/workspace/workspace-resolver-builder/factories/update-many-resolver.factory';
import { FindManyResolverFactory } from './find-many-resolver.factory';
import { FindOneResolverFactory } from './find-one-resolver.factory';
import { CreateManyResolverFactory } from './create-many-resolver.factory';
import { CreateOneResolverFactory } from './create-one-resolver.factory';
import { UpdateOneResolverFactory } from './update-one-resolver.factory';
import { DeleteOneResolverFactory } from './delete-one-resolver.factory';
import { DeleteManyResolverFactory } from './delete-many-resolver.factory';
import { ExecuteQuickActionOnOneResolverFactory } from './execute-quick-action-on-one-resolver.factory';
export declare const workspaceResolverBuilderFactories: (typeof UpdateManyResolverFactory | typeof FindManyResolverFactory | typeof FindOneResolverFactory | typeof CreateManyResolverFactory | typeof CreateOneResolverFactory | typeof UpdateOneResolverFactory | typeof DeleteOneResolverFactory | typeof DeleteManyResolverFactory | typeof ExecuteQuickActionOnOneResolverFactory)[];
export declare const workspaceResolverBuilderMethodNames: {
    readonly queries: readonly ["findMany", "findOne"];
    readonly mutations: readonly ["createMany", "createOne", "updateOne", "deleteOne", "executeQuickActionOnOne", "updateMany", "deleteMany"];
};
