import { Request } from 'express';
import { DeleteQueryFactory } from 'src/core/api-rest/api-rest-query-builder/factories/delete-query.factory';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { TokenService } from 'src/core/auth/services/token.service';
import { CreateQueryFactory } from 'src/core/api-rest/api-rest-query-builder/factories/create-query.factory';
import { UpdateQueryFactory } from 'src/core/api-rest/api-rest-query-builder/factories/update-query.factory';
import { FindOneQueryFactory } from 'src/core/api-rest/api-rest-query-builder/factories/find-one-query.factory';
import { FindManyQueryFactory } from 'src/core/api-rest/api-rest-query-builder/factories/find-many-query.factory';
import { DeleteVariablesFactory } from 'src/core/api-rest/api-rest-query-builder/factories/delete-variables.factory';
import { CreateVariablesFactory } from 'src/core/api-rest/api-rest-query-builder/factories/create-variables.factory';
import { UpdateVariablesFactory } from 'src/core/api-rest/api-rest-query-builder/factories/update-variables.factory';
import { GetVariablesFactory } from 'src/core/api-rest/api-rest-query-builder/factories/get-variables.factory';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
import { ApiRestQuery } from 'src/core/api-rest/types/api-rest-query.type';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export declare class ApiRestQueryBuilderFactory {
    private readonly deleteQueryFactory;
    private readonly createQueryFactory;
    private readonly updateQueryFactory;
    private readonly findOneQueryFactory;
    private readonly findManyQueryFactory;
    private readonly deleteVariablesFactory;
    private readonly createVariablesFactory;
    private readonly updateVariablesFactory;
    private readonly getVariablesFactory;
    private readonly objectMetadataService;
    private readonly tokenService;
    private readonly environmentService;
    constructor(deleteQueryFactory: DeleteQueryFactory, createQueryFactory: CreateQueryFactory, updateQueryFactory: UpdateQueryFactory, findOneQueryFactory: FindOneQueryFactory, findManyQueryFactory: FindManyQueryFactory, deleteVariablesFactory: DeleteVariablesFactory, createVariablesFactory: CreateVariablesFactory, updateVariablesFactory: UpdateVariablesFactory, getVariablesFactory: GetVariablesFactory, objectMetadataService: ObjectMetadataService, tokenService: TokenService, environmentService: EnvironmentService);
    getObjectMetadata(request: Request): Promise<{
        objectMetadataItems: ObjectMetadataEntity[];
        objectMetadataItem: ObjectMetadataEntity;
    }>;
    delete(request: Request): Promise<ApiRestQuery>;
    create(request: any): Promise<ApiRestQuery>;
    update(request: any): Promise<ApiRestQuery>;
    get(request: any): Promise<ApiRestQuery>;
}
