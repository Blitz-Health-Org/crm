import { GraphQLEnumType, GraphQLInputObjectType, GraphQLObjectType } from 'graphql';
import { EnumTypeDefinition } from 'src/workspace/workspace-schema-builder/factories/enum-type-definition.factory';
import { InputTypeDefinition, InputTypeDefinitionKind } from 'src/workspace/workspace-schema-builder/factories/input-type-definition.factory';
import { ObjectTypeDefinition, ObjectTypeDefinitionKind } from 'src/workspace/workspace-schema-builder/factories/object-type-definition.factory';
export declare class TypeDefinitionsStorage {
    private readonly enumTypeDefinitions;
    private readonly objectTypeDefinitions;
    private readonly inputTypeDefinitions;
    addEnumTypes(enumDefs: EnumTypeDefinition[]): void;
    addObjectTypes(objectDefs: ObjectTypeDefinition[]): void;
    getObjectTypeByKey(target: string, kind: ObjectTypeDefinitionKind): GraphQLObjectType | undefined;
    getAllObjectTypeDefinitions(): ObjectTypeDefinition[];
    addInputTypes(inputDefs: InputTypeDefinition[]): void;
    getInputTypeByKey(target: string, kind: InputTypeDefinitionKind): GraphQLInputObjectType | undefined;
    getEnumTypeByKey(target: string): GraphQLEnumType | undefined;
    getAllInputTypeDefinitions(): InputTypeDefinition[];
    private generateCompositeKey;
}
