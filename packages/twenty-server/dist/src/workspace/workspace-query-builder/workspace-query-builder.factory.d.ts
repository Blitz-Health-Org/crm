import { WorkspaceQueryBuilderOptions } from 'src/workspace/workspace-query-builder/interfaces/workspace-query-builder-options.interface';
import { Record as IRecord, RecordFilter, RecordOrderBy } from 'src/workspace/workspace-query-builder/interfaces/record.interface';
import { FindManyResolverArgs, FindOneResolverArgs, CreateManyResolverArgs, UpdateOneResolverArgs, DeleteOneResolverArgs, UpdateManyResolverArgs, DeleteManyResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { FindManyQueryFactory } from './factories/find-many-query.factory';
import { FindOneQueryFactory } from './factories/find-one-query.factory';
import { CreateManyQueryFactory } from './factories/create-many-query.factory';
import { UpdateOneQueryFactory } from './factories/update-one-query.factory';
import { DeleteOneQueryFactory } from './factories/delete-one-query.factory';
import { UpdateManyQueryFactory } from './factories/update-many-query.factory';
import { DeleteManyQueryFactory } from './factories/delete-many-query.factory';
export declare class WorkspaceQueryBuilderFactory {
    private readonly findManyQueryFactory;
    private readonly findOneQueryFactory;
    private readonly createManyQueryFactory;
    private readonly updateOneQueryFactory;
    private readonly deleteOneQueryFactory;
    private readonly updateManyQueryFactory;
    private readonly deleteManyQueryFactory;
    private readonly logger;
    constructor(findManyQueryFactory: FindManyQueryFactory, findOneQueryFactory: FindOneQueryFactory, createManyQueryFactory: CreateManyQueryFactory, updateOneQueryFactory: UpdateOneQueryFactory, deleteOneQueryFactory: DeleteOneQueryFactory, updateManyQueryFactory: UpdateManyQueryFactory, deleteManyQueryFactory: DeleteManyQueryFactory);
    findMany<Filter extends RecordFilter = RecordFilter, OrderBy extends RecordOrderBy = RecordOrderBy>(args: FindManyResolverArgs<Filter, OrderBy>, options: WorkspaceQueryBuilderOptions): Promise<string>;
    findOne<Filter extends RecordFilter = RecordFilter>(args: FindOneResolverArgs<Filter>, options: WorkspaceQueryBuilderOptions): Promise<string>;
    createMany<Record extends IRecord = IRecord>(args: CreateManyResolverArgs<Record>, options: WorkspaceQueryBuilderOptions): Promise<string>;
    updateOne<Record extends IRecord = IRecord>(initialArgs: UpdateOneResolverArgs<Record>, options: WorkspaceQueryBuilderOptions): Promise<string>;
    deleteOne(args: DeleteOneResolverArgs, options: WorkspaceQueryBuilderOptions): Promise<string>;
    updateMany<Record extends IRecord = IRecord, Filter extends RecordFilter = RecordFilter>(args: UpdateManyResolverArgs<Record, Filter>, options: WorkspaceQueryBuilderOptions): Promise<string>;
    deleteMany<Filter extends RecordFilter = RecordFilter>(args: DeleteManyResolverArgs<Filter>, options: WorkspaceQueryBuilderOptions): Promise<string>;
}
