import { IPageInfo } from './interfaces/page-info.interface';
import { ConnectionCursor } from './interfaces/connection-cursor.type';
export declare class PageInfo implements IPageInfo {
    startCursor: ConnectionCursor;
    endCursor: ConnectionCursor;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
