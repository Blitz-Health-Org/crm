import { WorkspaceQueryBuilderOptions } from 'src/workspace/workspace-query-builder/interfaces/workspace-query-builder-options.interface';
import { RecordFilter, RecordOrderBy } from 'src/workspace/workspace-query-builder/interfaces/record.interface';
import { FindManyResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { ArgsStringFactory } from './args-string.factory';
import { FieldsStringFactory } from './fields-string.factory';
export declare class FindManyQueryFactory {
    private readonly fieldsStringFactory;
    private readonly argsStringFactory;
    private readonly logger;
    constructor(fieldsStringFactory: FieldsStringFactory, argsStringFactory: ArgsStringFactory);
    create<Filter extends RecordFilter = RecordFilter, OrderBy extends RecordOrderBy = RecordOrderBy>(args: FindManyResolverArgs<Filter, OrderBy>, options: WorkspaceQueryBuilderOptions): Promise<string>;
}
