"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorScalarType = void 0;
const graphql_1 = require("graphql");
exports.CursorScalarType = new graphql_1.GraphQLScalarType({
    name: 'Cursor',
    description: 'A custom scalar that represents a cursor for pagination',
    serialize(value) {
        if (typeof value !== 'string') {
            throw new Error('Cursor must be a string');
        }
        return value;
    },
    parseValue(value) {
        if (typeof value !== 'string') {
            throw new Error('Cursor must be a string');
        }
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw new Error('Cursor must be a string');
        }
        return ast.value;
    },
});
//# sourceMappingURL=cursor.scalar.js.map