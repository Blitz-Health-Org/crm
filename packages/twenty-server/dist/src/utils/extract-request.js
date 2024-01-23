"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequest = void 0;
const graphql_1 = require("@nestjs/graphql");
const getRequest = (context) => {
    let request;
    if (context.getType() === 'http') {
        request = context.switchToHttp().getRequest();
    }
    else if (context.getType() === 'graphql') {
        const graphQLContext = graphql_1.GqlExecutionContext.create(context);
        const { req, connection } = graphQLContext.getContext();
        request =
            connection && connection.context && connection.context.headers
                ? connection.context
                : req;
    }
    else if (context.getType() === 'rpc') {
        throw new Error('Not implemented');
    }
    return request;
};
exports.getRequest = getRequest;
//# sourceMappingURL=extract-request.js.map