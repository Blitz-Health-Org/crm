import { Request } from 'express';
import { LastCursorInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/last-cursor-input.factory';
import { LimitInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/limit-input.factory';
import { OrderByInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/order-by-input.factory';
import { FilterInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/filter-input.factory';
import { ApiRestQueryVariables } from 'src/core/api-rest/types/api-rest-query-variables.type';
export declare class GetVariablesFactory {
    private readonly lastCursorInputFactory;
    private readonly limitInputFactory;
    private readonly orderByInputFactory;
    private readonly filterInputFactory;
    constructor(lastCursorInputFactory: LastCursorInputFactory, limitInputFactory: LimitInputFactory, orderByInputFactory: OrderByInputFactory, filterInputFactory: FilterInputFactory);
    create(id: string | undefined, request: Request, objectMetadata: any): ApiRestQueryVariables;
}
