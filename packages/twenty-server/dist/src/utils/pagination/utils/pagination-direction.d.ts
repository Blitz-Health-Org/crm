import { BackwardPaginationArguments, ConnectionArgumentsUnion, ForwardPaginationArguments } from 'src/utils/pagination/interfaces/connection-arguments.interface';
export declare function isForwardPagination(args: ConnectionArgumentsUnion): args is ForwardPaginationArguments;
export declare function isBackwardPagination(args: ConnectionArgumentsUnion): args is BackwardPaginationArguments;
