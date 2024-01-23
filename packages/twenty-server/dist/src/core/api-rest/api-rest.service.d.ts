import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { ApiRestQueryBuilderFactory } from 'src/core/api-rest/api-rest-query-builder/api-rest-query-builder.factory';
import { TokenService } from 'src/core/auth/services/token.service';
import { ApiRestResponse } from 'src/core/api-rest/types/api-rest-response.type';
import { ApiRestQuery } from 'src/core/api-rest/types/api-rest-query.type';
export declare class ApiRestService {
    private readonly tokenService;
    private readonly environmentService;
    private readonly apiRestQueryBuilderFactory;
    private readonly httpService;
    constructor(tokenService: TokenService, environmentService: EnvironmentService, apiRestQueryBuilderFactory: ApiRestQueryBuilderFactory, httpService: HttpService);
    callGraphql(request: Request, data: ApiRestQuery): Promise<ApiRestResponse>;
    get(request: Request): Promise<ApiRestResponse>;
    delete(request: Request): Promise<ApiRestResponse>;
    create(request: Request): Promise<ApiRestResponse>;
    update(request: Request): Promise<ApiRestResponse>;
}
