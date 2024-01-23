import { GraphQLObjectType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { OutputTypeFactory } from './output-type.factory';
export declare enum ObjectTypeDefinitionKind {
    Connection = "Connection",
    Edge = "Edge",
    Plain = ""
}
export interface ObjectTypeDefinition {
    target: string;
    kind: ObjectTypeDefinitionKind;
    type: GraphQLObjectType;
}
export declare class ObjectTypeDefinitionFactory {
    private readonly outputTypeFactory;
    constructor(outputTypeFactory: OutputTypeFactory);
    create(objectMetadata: ObjectMetadataInterface, kind: ObjectTypeDefinitionKind, options: WorkspaceBuildSchemaOptions): ObjectTypeDefinition;
    private generateFields;
}
