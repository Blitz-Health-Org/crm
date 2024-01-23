import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { ObjectTypeDefinition } from './object-type-definition.factory';
import { ConnectionTypeFactory } from './connection-type.factory';
export declare enum ConnectionTypeDefinitionKind {
    Edge = "Edge",
    PageInfo = "PageInfo"
}
export declare class ConnectionTypeDefinitionFactory {
    private readonly connectionTypeFactory;
    private readonly logger;
    constructor(connectionTypeFactory: ConnectionTypeFactory);
    create(objectMetadata: ObjectMetadataInterface, options: WorkspaceBuildSchemaOptions): ObjectTypeDefinition;
    private generateFields;
}
