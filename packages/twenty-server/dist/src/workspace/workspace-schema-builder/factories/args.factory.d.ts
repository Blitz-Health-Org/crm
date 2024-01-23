import { GraphQLFieldConfigArgumentMap } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ArgsMetadata } from 'src/workspace/workspace-schema-builder/interfaces/param-metadata.interface';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
import { TypeMapperService } from 'src/workspace/workspace-schema-builder/services/type-mapper.service';
export declare class ArgsFactory {
    private readonly typeDefinitionsStorage;
    private readonly typeMapperService;
    private readonly logger;
    constructor(typeDefinitionsStorage: TypeDefinitionsStorage, typeMapperService: TypeMapperService);
    create({ args, objectMetadataId }: ArgsMetadata, options: WorkspaceBuildSchemaOptions): GraphQLFieldConfigArgumentMap;
}
