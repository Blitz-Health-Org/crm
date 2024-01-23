import { WorkspaceResolverBuilderMethodNames } from 'src/workspace/workspace-resolver-builder/interfaces/workspace-resolvers-builder.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
export declare const getResolverName: (objectMetadata: Pick<ObjectMetadataInterface, 'namePlural' | 'nameSingular'>, type: WorkspaceResolverBuilderMethodNames) => string;
