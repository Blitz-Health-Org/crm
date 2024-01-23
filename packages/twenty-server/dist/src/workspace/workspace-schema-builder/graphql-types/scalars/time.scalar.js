"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeScalarType = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.TimeScalarType = new graphql_1.GraphQLScalarType({
    name: 'Time',
    description: 'Time custom scalar type',
    serialize(value) {
        return value.getTime();
    },
    parseValue(value) {
        return new Date(value);
    },
    parseLiteral(ast) {
        if (ast.kind === language_1.Kind.INT) {
            const intAst = ast;
            if (typeof intAst.value === 'number') {
                return new Date(intAst.value);
            }
            throw new Error(`Invalid timestamp value: ${ast.value}`);
        }
        throw new Error(`Invalid AST kind: ${ast.kind}`);
    },
});
//# sourceMappingURL=time.scalar.js.map