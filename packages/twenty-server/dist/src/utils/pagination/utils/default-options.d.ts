import { ObjectLiteral } from 'typeorm';
import { IEdge } from 'src/utils/pagination/interfaces/edge.interface';
import { IOptions } from 'src/utils/pagination/interfaces/options.interface';
export type MergedOptions<Entity extends ObjectLiteral, Record, Cursor, Node, CustomEdge extends IEdge<Node>> = Required<IOptions<Entity, Record, Cursor, Node, CustomEdge>>;
export declare function mergeDefaultOptions<Entity extends ObjectLiteral, Record, Cursor, Node, CustomEdge extends IEdge<Node>>(pOptions?: IOptions<Entity, Record, Cursor, Node, CustomEdge>): MergedOptions<Entity, Record, Cursor, Node, CustomEdge>;
