import { GraphQLObjectType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
import { RelationTypeFactory } from './relation-type.factory';
import { ArgsFactory } from './args.factory';
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
export declare class ExtendObjectTypeDefinitionFactory {
    private readonly relationTypeFactory;
    private readonly argsFactory;
    private readonly typeDefinitionsStorage;
    private readonly logger;
    constructor(relationTypeFactory: RelationTypeFactory, argsFactory: ArgsFactory, typeDefinitionsStorage: TypeDefinitionsStorage);
    create(objectMetadata: ObjectMetadataInterface, options: WorkspaceBuildSchemaOptions): ObjectTypeDefinition;
    private generateFields;
}
