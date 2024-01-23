import { WorkspaceQueryBuilderOptions } from 'src/workspace/workspace-query-builder/interfaces/workspace-query-builder-options.interface';
import { DeleteManyResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { FieldsStringFactory } from './fields-string.factory';
export declare class DeleteManyQueryFactory {
    private readonly fieldsStringFactory;
    constructor(fieldsStringFactory: FieldsStringFactory);
    create(args: DeleteManyResolverArgs, options: WorkspaceQueryBuilderOptions): Promise<string>;
}
