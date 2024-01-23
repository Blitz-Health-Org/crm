"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestBody = void 0;
const capitalize_1 = require("../../../utils/capitalize");
const getRequestBody = (item) => {
    return {
        description: 'body',
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: `#/components/schemas/${(0, capitalize_1.capitalize)(item.nameSingular)}`,
                },
            },
        },
    };
};
exports.getRequestBody = getRequestBody;
//# sourceMappingURL=request-body.utils.js.map