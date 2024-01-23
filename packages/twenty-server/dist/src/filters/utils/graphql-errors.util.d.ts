import { ASTNode, GraphQLError, GraphQLFormattedError, Source, SourceLocation } from 'graphql';
declare module 'graphql' {
    interface GraphQLErrorExtensions {
        exception?: {
            code?: string;
            stacktrace?: ReadonlyArray<string>;
        };
    }
}
export declare class BaseGraphQLError extends Error implements GraphQLError {
    extensions: Record<string, any>;
    readonly name: string;
    readonly locations: ReadonlyArray<SourceLocation> | undefined;
    readonly path: ReadonlyArray<string | number> | undefined;
    readonly source: Source | undefined;
    readonly positions: ReadonlyArray<number> | undefined;
    readonly nodes: ReadonlyArray<ASTNode> | undefined;
    originalError: Error | undefined;
    [key: string]: any;
    constructor(message: string, code?: string, extensions?: Record<string, any>);
    toJSON(): GraphQLFormattedError;
    toString(): string;
    get [Symbol.toStringTag](): string;
}
export declare class SyntaxError extends BaseGraphQLError {
    constructor(message: string);
}
export declare class ValidationError extends BaseGraphQLError {
    constructor(message: string);
}
export declare class AuthenticationError extends BaseGraphQLError {
    constructor(message: string, extensions?: Record<string, any>);
}
export declare class ForbiddenError extends BaseGraphQLError {
    constructor(message: string, extensions?: Record<string, any>);
}
export declare class PersistedQueryNotFoundError extends BaseGraphQLError {
    constructor();
}
export declare class PersistedQueryNotSupportedError extends BaseGraphQLError {
    constructor();
}
export declare class UserInputError extends BaseGraphQLError {
    constructor(message: string, extensions?: Record<string, any>);
}
export declare class NotFoundError extends BaseGraphQLError {
    constructor(message: string, extensions?: Record<string, any>);
}
export declare class ConflictError extends BaseGraphQLError {
    constructor(message: string, extensions?: Record<string, any>);
}
