"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = exports.NotFoundError = exports.UserInputError = exports.PersistedQueryNotSupportedError = exports.PersistedQueryNotFoundError = exports.ForbiddenError = exports.AuthenticationError = exports.ValidationError = exports.SyntaxError = exports.BaseGraphQLError = void 0;
const graphql_1 = require("graphql");
class BaseGraphQLError extends Error {
    constructor(message, code, extensions) {
        super(message);
        if (!this.name) {
            Object.defineProperty(this, 'name', { value: 'ApolloError' });
        }
        if (extensions === null || extensions === void 0 ? void 0 : extensions.extensions) {
            throw Error('Pass extensions directly as the third argument of the ApolloError constructor: `new ' +
                'ApolloError(message, code, {myExt: value})`, not `new ApolloError(message, code, ' +
                '{extensions: {myExt: value}})`');
        }
        this.extensions = Object.assign(Object.assign({}, extensions), { code });
    }
    toJSON() {
        return toGraphQLError(this).toJSON();
    }
    toString() {
        return toGraphQLError(this).toString();
    }
    get [Symbol.toStringTag]() {
        return this.name;
    }
}
exports.BaseGraphQLError = BaseGraphQLError;
function toGraphQLError(error) {
    return new graphql_1.GraphQLError(error.message, {
        nodes: error.nodes,
        source: error.source,
        positions: error.positions,
        path: error.path,
        originalError: error.originalError,
        extensions: error.extensions,
    });
}
class SyntaxError extends BaseGraphQLError {
    constructor(message) {
        super(message, 'GRAPHQL_PARSE_FAILED');
        Object.defineProperty(this, 'name', { value: 'SyntaxError' });
    }
}
exports.SyntaxError = SyntaxError;
class ValidationError extends BaseGraphQLError {
    constructor(message) {
        super(message, 'GRAPHQL_VALIDATION_FAILED');
        Object.defineProperty(this, 'name', { value: 'ValidationError' });
    }
}
exports.ValidationError = ValidationError;
class AuthenticationError extends BaseGraphQLError {
    constructor(message, extensions) {
        super(message, 'UNAUTHENTICATED', extensions);
        Object.defineProperty(this, 'name', { value: 'AuthenticationError' });
    }
}
exports.AuthenticationError = AuthenticationError;
class ForbiddenError extends BaseGraphQLError {
    constructor(message, extensions) {
        super(message, 'FORBIDDEN', extensions);
        Object.defineProperty(this, 'name', { value: 'ForbiddenError' });
    }
}
exports.ForbiddenError = ForbiddenError;
class PersistedQueryNotFoundError extends BaseGraphQLError {
    constructor() {
        super('PersistedQueryNotFound', 'PERSISTED_QUERY_NOT_FOUND');
        Object.defineProperty(this, 'name', {
            value: 'PersistedQueryNotFoundError',
        });
    }
}
exports.PersistedQueryNotFoundError = PersistedQueryNotFoundError;
class PersistedQueryNotSupportedError extends BaseGraphQLError {
    constructor() {
        super('PersistedQueryNotSupported', 'PERSISTED_QUERY_NOT_SUPPORTED');
        Object.defineProperty(this, 'name', {
            value: 'PersistedQueryNotSupportedError',
        });
    }
}
exports.PersistedQueryNotSupportedError = PersistedQueryNotSupportedError;
class UserInputError extends BaseGraphQLError {
    constructor(message, extensions) {
        super(message, 'BAD_USER_INPUT', extensions);
        Object.defineProperty(this, 'name', { value: 'UserInputError' });
    }
}
exports.UserInputError = UserInputError;
class NotFoundError extends BaseGraphQLError {
    constructor(message, extensions) {
        super(message, 'NOT_FOUND', extensions);
        Object.defineProperty(this, 'name', { value: 'NotFoundError' });
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends BaseGraphQLError {
    constructor(message, extensions) {
        super(message, 'CONFLICT', extensions);
        Object.defineProperty(this, 'name', { value: 'ConflictError' });
    }
}
exports.ConflictError = ConflictError;
//# sourceMappingURL=graphql-errors.util.js.map