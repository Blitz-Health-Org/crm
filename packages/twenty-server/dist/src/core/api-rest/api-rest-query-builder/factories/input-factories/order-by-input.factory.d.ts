import { Request } from 'express';
import { OrderByDirection, RecordOrderBy } from 'src/workspace/workspace-query-builder/interfaces/record.interface';
export declare const DEFAULT_ORDER_DIRECTION = OrderByDirection.AscNullsFirst;
export declare class OrderByInputFactory {
    create(request: Request, objectMetadata: any): RecordOrderBy;
}
