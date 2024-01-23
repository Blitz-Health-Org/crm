import { GraphQLInputObjectType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { InputTypeFactory } from './input-type.factory';
export declare enum InputTypeDefinitionKind {
    Create = "Create",
    Update = "Update",
    Filter = "Filter",
    OrderBy = "OrderBy"
}
export interface InputTypeDefinition {
    target: string;
    kind: InputTypeDefinitionKind;
    type: GraphQLInputObjectType;
}
export declare class InputTypeDefinitionFactory {
    private readonly inputTypeFactory;
    constructor(inputTypeFactory: InputTypeFactory);
    create(objectMetadata: ObjectMetadataInterface, kind: InputTypeDefinitionKind, options: WorkspaceBuildSchemaOptions): InputTypeDefinition;
    private generateFields;
}
