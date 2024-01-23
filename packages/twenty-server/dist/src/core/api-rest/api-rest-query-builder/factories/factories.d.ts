import { CreateQueryFactory } from 'src/core/api-rest/api-rest-query-builder/factories/create-query.factory';
import { CreateVariablesFactory } from 'src/core/api-rest/api-rest-query-builder/factories/create-variables.factory';
import { UpdateVariablesFactory } from 'src/core/api-rest/api-rest-query-builder/factories/update-variables.factory';
import { GetVariablesFactory } from 'src/core/api-rest/api-rest-query-builder/factories/get-variables.factory';
import { LastCursorInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/last-cursor-input.factory';
import { LimitInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/limit-input.factory';
import { OrderByInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/order-by-input.factory';
import { FilterInputFactory } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/filter-input.factory';
export declare const apiRestQueryBuilderFactories: (typeof CreateQueryFactory | typeof CreateVariablesFactory | typeof UpdateVariablesFactory | typeof LastCursorInputFactory | typeof LimitInputFactory | typeof OrderByInputFactory | typeof FilterInputFactory | typeof GetVariablesFactory)[];
