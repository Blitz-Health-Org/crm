"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorResponses = void 0;
const getErrorResponses = (description) => {
    return {
        description,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        error: { type: 'string' },
                    },
                },
            },
        },
    };
};
exports.getErrorResponses = getErrorResponses;
//# sourceMappingURL=get-error-responses.utils.js.map