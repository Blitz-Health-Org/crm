import { WorkspaceQueryBuilderOptions } from 'src/workspace/workspace-query-builder/interfaces/workspace-query-builder-options.interface';
import { DeleteOneResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { FieldsStringFactory } from './fields-string.factory';
export declare class DeleteOneQueryFactory {
    private readonly fieldsStringFactory;
    private readonly logger;
    constructor(fieldsStringFactory: FieldsStringFactory);
    create(args: DeleteOneResolverArgs, options: WorkspaceQueryBuilderOptions): Promise<string>;
}
