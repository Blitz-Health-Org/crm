import { Request, Response } from 'express';
import { OpenApiService } from 'src/core/open-api/open-api.service';
export declare class OpenApiController {
    private readonly openApiService;
    constructor(openApiService: OpenApiService);
    generateOpenApiSchema(request: Request, res: Response): Promise<void>;
}
