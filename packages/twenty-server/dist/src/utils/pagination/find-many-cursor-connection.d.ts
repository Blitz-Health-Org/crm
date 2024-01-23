import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { IEdge } from './interfaces/edge.interface';
import { IConnectionArguments } from './interfaces/connection-arguments.interface';
import { IOptions } from './interfaces/options.interface';
import { IConnection } from './interfaces/connection.interface';
export declare function findManyCursorConnection<Entity extends ObjectLiteral, Record = Entity, Cursor = {
    id: string;
}, Node = Record, CustomEdge extends IEdge<Node> = IEdge<Node>>(query: SelectQueryBuilder<Entity>, args?: IConnectionArguments, initialOptions?: IOptions<Entity, Record, Cursor, Node, CustomEdge>): Promise<IConnection<Node, CustomEdge>>;
