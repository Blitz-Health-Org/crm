import { ObjectLiteral } from 'typeorm';
import { IEdge } from 'src/utils/pagination/interfaces/edge.interface';
import { MergedOptions } from './default-options';
export declare function decodeCursor<Entity extends ObjectLiteral, Record, Cursor, Node, CustomEdge extends IEdge<Node>>(connectionCursor: string | undefined, options: MergedOptions<Entity, Record, Cursor, Node, CustomEdge>): Cursor | undefined;
export declare function encodeCursor<Entity extends ObjectLiteral, Record, Cursor, Node, CustomEdge extends IEdge<Node>>(record: Record, options: MergedOptions<Entity, Record, Cursor, Node, CustomEdge>): string;
export declare function extractCursorKeyValue<Entity extends ObjectLiteral, Record, Cursor, Node, CustomEdge extends IEdge<Node>>(connectionCursor: string | undefined, options: MergedOptions<Entity, Record, Cursor, Node, CustomEdge>): [string[], unknown[]] | undefined;
