import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { InputTypeDefinition } from './input-type-definition.factory';
import { OrderByTypeFactory } from './order-by-type.factory';
export declare class OrderByTypeDefinitionFactory {
    private readonly orderByTypeFactory;
    constructor(orderByTypeFactory: OrderByTypeFactory);
    create(objectMetadata: ObjectMetadataInterface, options: WorkspaceBuildSchemaOptions): InputTypeDefinition;
    private generateFields;
}
