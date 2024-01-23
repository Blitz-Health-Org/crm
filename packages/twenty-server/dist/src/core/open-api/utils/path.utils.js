"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeOpenApiPath = exports.computeSingleResultPath = exports.computeManyResultPath = void 0;
const capitalize_1 = require("../../../utils/capitalize");
const responses_utils_1 = require("./responses.utils");
const request_body_utils_1 = require("./request-body.utils");
const computeManyResultPath = (item) => {
    return {
        get: {
            tags: [item.namePlural],
            summary: `Find Many ${item.namePlural}`,
            description: `**order_by**, **filter**, **limit**, **depth** or **last_cursor** can be provided to request your **${item.namePlural}**`,
            operationId: `findMany${(0, capitalize_1.capitalize)(item.namePlural)}`,
            parameters: [
                { $ref: '#/components/parameters/orderBy' },
                { $ref: '#/components/parameters/filter' },
                { $ref: '#/components/parameters/limit' },
                { $ref: '#/components/parameters/depth' },
                { $ref: '#/components/parameters/lastCursor' },
            ],
            responses: {
                '200': (0, responses_utils_1.getManyResultResponse200)(item),
                '400': { $ref: '#/components/responses/400' },
                '401': { $ref: '#/components/responses/401' },
            },
        },
        post: {
            tags: [item.namePlural],
            summary: `Create One ${item.nameSingular}`,
            operationId: `createOne${(0, capitalize_1.capitalize)(item.nameSingular)}`,
            parameters: [{ $ref: '#/components/parameters/depth' }],
            requestBody: (0, request_body_utils_1.getRequestBody)(item),
            responses: {
                '201': (0, responses_utils_1.getSingleResultSuccessResponse)(item),
                '400': { $ref: '#/components/responses/400' },
                '401': { $ref: '#/components/responses/401' },
            },
        },
    };
};
exports.computeManyResultPath = computeManyResultPath;
const computeSingleResultPath = (item) => {
    return {
        get: {
            tags: [item.namePlural],
            summary: `Find One ${item.nameSingular}`,
            description: `**depth** can be provided to request your **${item.nameSingular}**`,
            operationId: `findOne${(0, capitalize_1.capitalize)(item.nameSingular)}`,
            parameters: [
                { $ref: '#/components/parameters/idPath' },
                { $ref: '#/components/parameters/depth' },
            ],
            responses: {
                '200': (0, responses_utils_1.getSingleResultSuccessResponse)(item),
                '400': { $ref: '#/components/responses/400' },
                '401': { $ref: '#/components/responses/401' },
            },
        },
        delete: {
            tags: [item.namePlural],
            summary: `Delete One ${item.nameSingular}`,
            operationId: `deleteOne${(0, capitalize_1.capitalize)(item.nameSingular)}`,
            parameters: [{ $ref: '#/components/parameters/idPath' }],
            responses: {
                '200': (0, responses_utils_1.getDeleteResponse200)(item),
                '400': { $ref: '#/components/responses/400' },
                '401': { $ref: '#/components/responses/401' },
            },
        },
        put: {
            tags: [item.namePlural],
            summary: `Update One ${item.namePlural}`,
            operationId: `UpdateOne${(0, capitalize_1.capitalize)(item.nameSingular)}`,
            parameters: [
                { $ref: '#/components/parameters/idPath' },
                { $ref: '#/components/parameters/depth' },
            ],
            requestBody: (0, request_body_utils_1.getRequestBody)(item),
            responses: {
                '200': (0, responses_utils_1.getSingleResultSuccessResponse)(item),
                '400': { $ref: '#/components/responses/400' },
                '401': { $ref: '#/components/responses/401' },
            },
        },
    };
};
exports.computeSingleResultPath = computeSingleResultPath;
const computeOpenApiPath = () => {
    return {
        get: {
            tags: ['General'],
            summary: 'Get Open Api Schema',
            operationId: 'GetOpenApiSchema',
            responses: {
                '200': (0, responses_utils_1.getJsonResponse)(),
            },
        },
    };
};
exports.computeOpenApiPath = computeOpenApiPath;
//# sourceMappingURL=path.utils.js.map