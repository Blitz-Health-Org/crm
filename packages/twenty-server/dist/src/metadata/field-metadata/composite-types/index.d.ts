import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
export type CompositeFieldsDefinitionFunction = (fieldMetadata?: FieldMetadataInterface) => FieldMetadataInterface[];
export declare const compositeDefinitions: Map<string, CompositeFieldsDefinitionFunction>;
