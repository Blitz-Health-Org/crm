import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { TypeMapperService } from 'src/workspace/workspace-schema-builder/services/type-mapper.service';
import { FilterTypeFactory } from './filter-type.factory';
import { InputTypeDefinition } from './input-type-definition.factory';
export declare class FilterTypeDefinitionFactory {
    private readonly filterTypeFactory;
    private readonly typeMapperService;
    constructor(filterTypeFactory: FilterTypeFactory, typeMapperService: TypeMapperService);
    create(objectMetadata: ObjectMetadataInterface, options: WorkspaceBuildSchemaOptions): InputTypeDefinition;
    private generateFields;
}
