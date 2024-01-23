import { Type } from '@nestjs/common';
import { IConnectionArguments } from './interfaces/connection-arguments.interface';
import { IConnection } from './interfaces/connection.interface';
export type ConnectionCursor = string;
export declare class ConnectionArgs implements IConnectionArguments {
    before?: ConnectionCursor;
    after?: ConnectionCursor;
    first?: number;
    last?: number;
}
export declare function Paginated<T>(classRef: Type<T>): Type<IConnection<T>>;
