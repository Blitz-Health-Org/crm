import { GraphQLOutputType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { TypeMapperService, TypeOptions } from 'src/workspace/workspace-schema-builder/services/type-mapper.service';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
import { ObjectTypeDefinitionKind } from './object-type-definition.factory';
export declare class OutputTypeFactory {
    private readonly typeMapperService;
    private readonly typeDefinitionsStorage;
    private readonly logger;
    constructor(typeMapperService: TypeMapperService, typeDefinitionsStorage: TypeDefinitionsStorage);
    create(fieldMetadata: FieldMetadataInterface, kind: ObjectTypeDefinitionKind, buildOtions: WorkspaceBuildSchemaOptions, typeOptions: TypeOptions): GraphQLOutputType;
}
