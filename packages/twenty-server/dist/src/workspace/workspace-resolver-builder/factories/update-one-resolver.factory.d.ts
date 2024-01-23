import { Resolver, UpdateOneResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { WorkspaceSchemaBuilderContext } from 'src/workspace/workspace-schema-builder/interfaces/workspace-schema-builder-context.interface';
import { WorkspaceResolverBuilderFactoryInterface } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolver-builder-factory.interface';
import { WorkspaceQueryRunnerService } from 'src/workspace/workspace-query-runner/workspace-query-runner.service';
export declare class UpdateOneResolverFactory implements WorkspaceResolverBuilderFactoryInterface {
    private readonly workspaceQueryRunnerService;
    static methodName: "updateOne";
    constructor(workspaceQueryRunnerService: WorkspaceQueryRunnerService);
    create(context: WorkspaceSchemaBuilderContext): Resolver<UpdateOneResolverArgs>;
}
