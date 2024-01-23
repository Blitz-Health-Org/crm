import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { ObjectTypeDefinition } from './object-type-definition.factory';
import { EdgeTypeFactory } from './edge-type.factory';
export declare enum EdgeTypeDefinitionKind {
    Node = "Node",
    Cursor = "Cursor"
}
export declare class EdgeTypeDefinitionFactory {
    private readonly edgeTypeFactory;
    private readonly logger;
    constructor(edgeTypeFactory: EdgeTypeFactory);
    create(objectMetadata: ObjectMetadataInterface, options: WorkspaceBuildSchemaOptions): ObjectTypeDefinition;
    private generateFields;
}
