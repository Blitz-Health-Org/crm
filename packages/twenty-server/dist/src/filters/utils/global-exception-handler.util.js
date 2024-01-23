"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertExceptionToGraphql = exports.convertHttpExceptionToGraphql = exports.convertExceptionToGraphQLError = exports.handleException = exports.handleExceptionAndConvertToGraphQLError = void 0;
const common_1 = require("@nestjs/common");
const graphql_errors_util_1 = require("./graphql-errors.util");
const graphQLPredefinedExceptions = {
    400: graphql_errors_util_1.ValidationError,
    401: graphql_errors_util_1.AuthenticationError,
    403: graphql_errors_util_1.ForbiddenError,
    404: graphql_errors_util_1.NotFoundError,
    409: graphql_errors_util_1.ConflictError,
};
const handleExceptionAndConvertToGraphQLError = (exception, exceptionHandlerService) => {
    (0, exports.handleException)(exception, exceptionHandlerService);
    return (0, exports.convertExceptionToGraphQLError)(exception);
};
exports.handleExceptionAndConvertToGraphQLError = handleExceptionAndConvertToGraphQLError;
const handleException = (exception, exceptionHandlerService) => {
    if (exception instanceof common_1.HttpException && exception.getStatus() < 500) {
        return;
    }
    exceptionHandlerService.captureException(exception);
};
exports.handleException = handleException;
const convertExceptionToGraphQLError = (exception) => {
    if (exception instanceof common_1.HttpException) {
        return (0, exports.convertHttpExceptionToGraphql)(exception);
    }
    return (0, exports.convertExceptionToGraphql)(exception);
};
exports.convertExceptionToGraphQLError = convertExceptionToGraphQLError;
const convertHttpExceptionToGraphql = (exception) => {
    const status = exception.getStatus();
    let error;
    if (status in graphQLPredefinedExceptions) {
        error = new graphQLPredefinedExceptions[exception.getStatus()](exception.message);
    }
    else {
        error = new graphql_errors_util_1.BaseGraphQLError('Internal Server Error', exception.getStatus().toString());
    }
    error.stack = exception.stack;
    error.extensions['response'] = exception.getResponse();
    return error;
};
exports.convertHttpExceptionToGraphql = convertHttpExceptionToGraphql;
const convertExceptionToGraphql = (exception) => {
    const error = new graphql_errors_util_1.BaseGraphQLError(exception.name, 'INTERNAL_SERVER_ERROR');
    error.stack = exception.stack;
    error.extensions['response'] = exception.message;
    return error;
};
exports.convertExceptionToGraphql = convertExceptionToGraphql;
//# sourceMappingURL=global-exception-handler.util.js.map