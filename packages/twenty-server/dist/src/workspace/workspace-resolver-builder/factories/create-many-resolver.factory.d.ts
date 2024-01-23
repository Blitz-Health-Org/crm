import { CreateManyResolverArgs, Resolver } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { WorkspaceSchemaBuilderContext } from 'src/workspace/workspace-schema-builder/interfaces/workspace-schema-builder-context.interface';
import { WorkspaceResolverBuilderFactoryInterface } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolver-builder-factory.interface';
import { WorkspaceQueryRunnerService } from 'src/workspace/workspace-query-runner/workspace-query-runner.service';
export declare class CreateManyResolverFactory implements WorkspaceResolverBuilderFactoryInterface {
    private readonly workspaceQueryRunnerService;
    static methodName: "createMany";
    constructor(workspaceQueryRunnerService: WorkspaceQueryRunnerService);
    create(context: WorkspaceSchemaBuilderContext): Resolver<CreateManyResolverArgs>;
}
