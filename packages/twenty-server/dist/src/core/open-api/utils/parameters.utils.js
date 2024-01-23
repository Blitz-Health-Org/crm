"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeIdPathParameter = exports.computeLastCursorParameters = exports.computeFilterParameters = exports.computeDepthParameters = exports.computeOrderByParameters = exports.computeLimitParameters = void 0;
const record_interface_1 = require("../../../workspace/workspace-query-builder/interfaces/record.interface");
const parse_base_filter_utils_1 = require("../../api-rest/api-rest-query-builder/factories/input-factories/filter-utils/parse-base-filter.utils");
const parse_filter_utils_1 = require("../../api-rest/api-rest-query-builder/factories/input-factories/filter-utils/parse-filter.utils");
const order_by_input_factory_1 = require("../../api-rest/api-rest-query-builder/factories/input-factories/order-by-input.factory");
const add_default_conjunction_utils_1 = require("../../api-rest/api-rest-query-builder/factories/input-factories/filter-utils/add-default-conjunction.utils");
const computeLimitParameters = () => {
    return {
        name: 'limit',
        in: 'query',
        description: 'Limits the number of objects returned.',
        required: false,
        schema: {
            type: 'integer',
            minimum: 0,
            maximum: 60,
            default: 60,
        },
    };
};
exports.computeLimitParameters = computeLimitParameters;
const computeOrderByParameters = () => {
    return {
        name: 'order_by',
        in: 'query',
        description: `Sorts objects returned.  
    Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...**  
    Available directions are **${Object.values(record_interface_1.OrderByDirection).join('**, **')}**.  
    Default direction is **${order_by_input_factory_1.DEFAULT_ORDER_DIRECTION}**`,
        required: false,
        schema: {
            type: 'string',
        },
        examples: {
            simple: {
                value: `createdAt`,
                summary: 'A simple order_by param',
            },
            complex: {
                value: `id[${record_interface_1.OrderByDirection.AscNullsFirst}],createdAt[${record_interface_1.OrderByDirection.DescNullsLast}]`,
                summary: 'A more complex order_by param',
            },
        },
    };
};
exports.computeOrderByParameters = computeOrderByParameters;
const computeDepthParameters = () => {
    return {
        name: 'depth',
        in: 'query',
        description: 'Limits the depth objects returned.',
        required: false,
        schema: {
            type: 'integer',
            enum: [1, 2],
        },
    };
};
exports.computeDepthParameters = computeDepthParameters;
const computeFilterParameters = () => {
    return {
        name: 'filter',
        in: 'query',
        description: `Filters objects returned.  
    Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2,...**  
    Available comparators are **${Object.values(parse_base_filter_utils_1.FilterComparators).join('**, **')}**.  
    You can create more complex filters using conjunctions **${Object.values(parse_filter_utils_1.Conjunctions).join('**, **')}**.  
    Default root conjunction is **${add_default_conjunction_utils_1.DEFAULT_CONJUNCTION}**.  
    To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL**  
    To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**`,
        required: false,
        schema: {
            type: 'string',
        },
        examples: {
            simple: {
                value: 'createdAt[gte]:"2023-01-01"',
                description: 'A simple filter param',
            },
            complex: {
                value: 'or(createdAt[gte]:"2024-01-01",createdAt[lte]:"2023-01-01",not(id[is]:NULL))',
                description: 'A more complex filter param',
            },
        },
    };
};
exports.computeFilterParameters = computeFilterParameters;
const computeLastCursorParameters = () => {
    return {
        name: 'last_cursor',
        in: 'query',
        description: 'Returns objects starting from a specific cursor.',
        required: false,
        schema: {
            type: 'string',
        },
    };
};
exports.computeLastCursorParameters = computeLastCursorParameters;
const computeIdPathParameter = () => {
    return {
        name: 'id',
        in: 'path',
        description: 'Object id.',
        required: true,
        schema: {
            type: 'string',
            format: 'uuid',
        },
    };
};
exports.computeIdPathParameter = computeIdPathParameter;
//# sourceMappingURL=parameters.utils.js.map