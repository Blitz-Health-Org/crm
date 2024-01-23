"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResult = exports.cleanGraphQLResponse = void 0;
const cleanGraphQLResponse = (input) => {
    if (!input)
        return null;
    const output = {};
    const isObject = (obj) => {
        return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
    };
    Object.keys(input).forEach((key) => {
        if (input[key] && input[key].edges) {
            output[key] = input[key].edges.map((edge) => (0, exports.cleanGraphQLResponse)(edge.node));
        }
        else if (isObject(input[key])) {
            output[key] = (0, exports.cleanGraphQLResponse)(input[key]);
        }
        else if (key !== '__typename') {
            output[key] = input[key];
        }
    });
    return output;
};
exports.cleanGraphQLResponse = cleanGraphQLResponse;
const handleResult = (res, result) => {
    if (result.data.error) {
        res
            .status(result.data.status || 400)
            .send({ error: `${result.data.error}` });
    }
    else {
        res.send((0, exports.cleanGraphQLResponse)(result.data));
    }
};
exports.handleResult = handleResult;
//# sourceMappingURL=api-rest.controller.utils.js.map