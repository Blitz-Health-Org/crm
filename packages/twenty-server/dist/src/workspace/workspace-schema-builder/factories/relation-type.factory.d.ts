import { GraphQLOutputType } from 'graphql';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { RelationMetadataInterface } from 'src/metadata/field-metadata/interfaces/relation-metadata.interface';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
import { RelationDirection } from 'src/workspace/utils/deduce-relation-direction.util';
export declare class RelationTypeFactory {
    private readonly typeDefinitionsStorage;
    private readonly logger;
    constructor(typeDefinitionsStorage: TypeDefinitionsStorage);
    create(fieldMetadata: FieldMetadataInterface, relationMetadata: RelationMetadataInterface, relationDirection: RelationDirection): GraphQLOutputType;
}
