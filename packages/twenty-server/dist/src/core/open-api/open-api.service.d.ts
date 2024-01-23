import { Request } from 'express';
import { OpenAPIV3 } from 'openapi-types';
import { TokenService } from 'src/core/auth/services/token.service';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
export declare class OpenApiService {
    private readonly tokenService;
    private readonly objectMetadataService;
    constructor(tokenService: TokenService, objectMetadataService: ObjectMetadataService);
    generateSchema(request: Request): Promise<OpenAPIV3.Document>;
}
