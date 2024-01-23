import { Record as IRecord, RecordFilter } from 'src/workspace/workspace-query-builder/interfaces/record.interface';
import { WorkspaceQueryBuilderOptions } from 'src/workspace/workspace-query-builder/interfaces/workspace-query-builder-options.interface';
import { UpdateManyResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { FieldsStringFactory } from 'src/workspace/workspace-query-builder/factories/fields-string.factory';
import { ArgsAliasFactory } from 'src/workspace/workspace-query-builder/factories/args-alias.factory';
export declare class UpdateManyQueryFactory {
    private readonly fieldsStringFactory;
    private readonly argsAliasFactory;
    constructor(fieldsStringFactory: FieldsStringFactory, argsAliasFactory: ArgsAliasFactory);
    create<Record extends IRecord = IRecord, Filter extends RecordFilter = RecordFilter>(args: UpdateManyResolverArgs<Record, Filter>, options: WorkspaceQueryBuilderOptions): Promise<string>;
}
