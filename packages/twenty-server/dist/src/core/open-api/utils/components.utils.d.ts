import { OpenAPIV3 } from 'openapi-types';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const computeSchemaComponents: (objectMetadataItems: ObjectMetadataEntity[]) => Record<string, OpenAPIV3.SchemaObject>;
export declare const computeParameterComponents: () => Record<string, OpenAPIV3.ParameterObject>;
