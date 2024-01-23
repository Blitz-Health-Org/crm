import { Resolver, ExecuteQuickActionOnOneResolverArgs } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { WorkspaceSchemaBuilderContext } from 'src/workspace/workspace-schema-builder/interfaces/workspace-schema-builder-context.interface';
import { WorkspaceResolverBuilderFactoryInterface } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolver-builder-factory.interface';
import { WorkspaceQueryRunnerService } from 'src/workspace/workspace-query-runner/workspace-query-runner.service';
import { QuickActionsService } from 'src/core/quick-actions/quick-actions.service';
export declare class ExecuteQuickActionOnOneResolverFactory implements WorkspaceResolverBuilderFactoryInterface {
    private readonly workspaceQueryRunnerService;
    private readonly quickActionsService;
    static methodName: "executeQuickActionOnOne";
    constructor(workspaceQueryRunnerService: WorkspaceQueryRunnerService, quickActionsService: QuickActionsService);
    create(context: WorkspaceSchemaBuilderContext): Resolver<ExecuteQuickActionOnOneResolverArgs>;
    private executeQuickActionOnOne;
}
