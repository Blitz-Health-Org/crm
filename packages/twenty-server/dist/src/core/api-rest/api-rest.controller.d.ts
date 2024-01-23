import { Request, Response } from 'express';
import { ApiRestService } from 'src/core/api-rest/api-rest.service';
export declare class ApiRestController {
    private readonly apiRestService;
    constructor(apiRestService: ApiRestService);
    handleApiGet(request: Request, res: Response): Promise<void>;
    handleApiDelete(request: Request, res: Response): Promise<void>;
    handleApiPost(request: Request, res: Response): Promise<void>;
    handleApiPut(request: Request, res: Response): Promise<void>;
}
