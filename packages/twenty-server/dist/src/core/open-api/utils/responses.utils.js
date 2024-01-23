"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonResponse = exports.getDeleteResponse200 = exports.getSingleResultSuccessResponse = exports.getManyResultResponse200 = void 0;
const capitalize_1 = require("../../../utils/capitalize");
const getManyResultResponse200 = (item) => {
    return {
        description: 'Successful operation',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        data: {
                            type: 'object',
                            properties: {
                                [item.namePlural]: {
                                    type: 'array',
                                    items: {
                                        $ref: `#/components/schemas/${(0, capitalize_1.capitalize)(item.nameSingular)}`,
                                    },
                                },
                            },
                        },
                    },
                    example: {
                        data: {
                            [item.namePlural]: [
                                `${(0, capitalize_1.capitalize)(item.nameSingular)}Object`,
                                '...',
                            ],
                        },
                    },
                },
            },
        },
    };
};
exports.getManyResultResponse200 = getManyResultResponse200;
const getSingleResultSuccessResponse = (item) => {
    return {
        description: 'Successful operation',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        data: {
                            type: 'object',
                            properties: {
                                [item.nameSingular]: {
                                    $ref: `#/components/schemas/${(0, capitalize_1.capitalize)(item.nameSingular)}`,
                                },
                            },
                        },
                    },
                },
            },
        },
    };
};
exports.getSingleResultSuccessResponse = getSingleResultSuccessResponse;
const getDeleteResponse200 = (item) => {
    return {
        description: 'Successful operation',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        data: {
                            type: 'object',
                            properties: {
                                [item.nameSingular]: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                            format: 'uuid',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    };
};
exports.getDeleteResponse200 = getDeleteResponse200;
const getJsonResponse = () => {
    return {
        description: 'Successful operation',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    };
};
exports.getJsonResponse = getJsonResponse;
//# sourceMappingURL=responses.utils.js.map