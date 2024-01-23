import { GraphQLOutputType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { TypeMapperService, TypeOptions } from 'src/workspace/workspace-schema-builder/services/type-mapper.service';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
import { EdgeTypeDefinitionKind } from './edge-type-definition.factory';
export declare class EdgeTypeFactory {
    private readonly typeMapperService;
    private readonly typeDefinitionsStorage;
    private readonly logger;
    constructor(typeMapperService: TypeMapperService, typeDefinitionsStorage: TypeDefinitionsStorage);
    create(objectMetadata: ObjectMetadataInterface, kind: EdgeTypeDefinitionKind, buildOtions: WorkspaceBuildSchemaOptions, typeOptions: TypeOptions): GraphQLOutputType;
}
