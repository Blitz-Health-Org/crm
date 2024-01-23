import { OpenAPIV3 } from 'openapi-types';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const computeManyResultPath: (item: ObjectMetadataEntity) => OpenAPIV3.PathItemObject;
export declare const computeSingleResultPath: (item: ObjectMetadataEntity) => OpenAPIV3.PathItemObject;
export declare const computeOpenApiPath: () => OpenAPIV3.PathItemObject;
