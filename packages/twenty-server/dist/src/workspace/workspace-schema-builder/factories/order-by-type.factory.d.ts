import { GraphQLInputType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { TypeMapperService, TypeOptions } from 'src/workspace/workspace-schema-builder/services/type-mapper.service';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
export declare class OrderByTypeFactory {
    private readonly typeMapperService;
    private readonly typeDefinitionsStorage;
    private readonly logger;
    constructor(typeMapperService: TypeMapperService, typeDefinitionsStorage: TypeDefinitionsStorage);
    create(fieldMetadata: FieldMetadataInterface, buildOtions: WorkspaceBuildSchemaOptions, typeOptions: TypeOptions): GraphQLInputType;
}
