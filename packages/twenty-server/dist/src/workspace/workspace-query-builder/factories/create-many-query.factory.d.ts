import { WorkspaceQueryBuilderOptions } from 'src/workspace/workspace-query-builder/interfaces/workspace-query-builder-options.interface';
import { Record as IRecord } from 'src/workspace/workspace-query-builder/interfaces/record.interface';
import { CreateManyResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { FieldsStringFactory } from './fields-string.factory';
import { ArgsAliasFactory } from './args-alias.factory';
export declare class CreateManyQueryFactory {
    private readonly fieldsStringFactory;
    private readonly argsAliasFactory;
    private readonly logger;
    constructor(fieldsStringFactory: FieldsStringFactory, argsAliasFactory: ArgsAliasFactory);
    create<Record extends IRecord = IRecord>(args: CreateManyResolverArgs<Record>, options: WorkspaceQueryBuilderOptions): Promise<string>;
}
