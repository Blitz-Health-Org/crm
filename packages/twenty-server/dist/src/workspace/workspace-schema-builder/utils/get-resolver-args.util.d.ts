import { WorkspaceResolverBuilderMethodNames } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { ArgMetadata } from 'src/workspace/workspace-schema-builder/interfaces/param-metadata.interface';
export declare const getResolverArgs: (type: WorkspaceResolverBuilderMethodNames) => {
    [key: string]: ArgMetadata<any>;
};
