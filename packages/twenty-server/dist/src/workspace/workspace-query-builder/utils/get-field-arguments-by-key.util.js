"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldArgumentsByKey = void 0;
const graphql_1 = require("graphql");
const isFieldNode = (node) => node.kind === graphql_1.Kind.FIELD;
const isInlineFragmentNode = (node) => node.kind === graphql_1.Kind.INLINE_FRAGMENT;
const findFieldNode = (selectionSet, key) => {
    if (!selectionSet)
        return null;
    let field = null;
    for (const selection of selectionSet.selections) {
        if (isFieldNode(selection) && selection.name.value === key) {
            return selection;
        }
        if ((isFieldNode(selection) || isInlineFragmentNode(selection)) &&
            selection.selectionSet) {
            field = findFieldNode(selection.selectionSet, key);
            if (field)
                break;
        }
    }
    return field;
};
const parseValueNode = (valueNode, variables) => {
    switch (valueNode.kind) {
        case graphql_1.Kind.VARIABLE:
            return variables[valueNode.name.value];
        case graphql_1.Kind.INT:
        case graphql_1.Kind.FLOAT:
            return Number(valueNode.value);
        case graphql_1.Kind.STRING:
        case graphql_1.Kind.BOOLEAN:
        case graphql_1.Kind.ENUM:
            return valueNode.value;
        case graphql_1.Kind.LIST:
            return valueNode.values.map((value) => parseValueNode(value, variables));
        case graphql_1.Kind.OBJECT:
            return valueNode.fields.reduce((obj, field) => {
                obj[field.name.value] = parseValueNode(field.value, variables);
                return obj;
            }, {});
        default:
            return null;
    }
};
const getFieldArgumentsByKey = (info, fieldKey) => {
    const targetField = findFieldNode(info.fieldNodes[0].selectionSet, fieldKey);
    if (!targetField) {
        throw new Error(`Field "${fieldKey}" not found.`);
    }
    const args = {};
    if (targetField.arguments && targetField.arguments.length) {
        for (const arg of targetField.arguments) {
            args[arg.name.value] = parseValueNode(arg.value, info.variableValues);
        }
    }
    return args;
};
exports.getFieldArgumentsByKey = getFieldArgumentsByKey;
//# sourceMappingURL=get-field-arguments-by-key.util.js.map