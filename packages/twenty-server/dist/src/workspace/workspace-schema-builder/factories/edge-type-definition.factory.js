"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EdgeTypeDefinitionFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeTypeDefinitionFactory = exports.EdgeTypeDefinitionKind = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const pascal_case_1 = require("../../../utils/pascal-case");
const object_type_definition_factory_1 = require("./object-type-definition.factory");
const edge_type_factory_1 = require("./edge-type.factory");
var EdgeTypeDefinitionKind;
(function (EdgeTypeDefinitionKind) {
    EdgeTypeDefinitionKind["Node"] = "Node";
    EdgeTypeDefinitionKind["Cursor"] = "Cursor";
})(EdgeTypeDefinitionKind || (exports.EdgeTypeDefinitionKind = EdgeTypeDefinitionKind = {}));
let EdgeTypeDefinitionFactory = EdgeTypeDefinitionFactory_1 = class EdgeTypeDefinitionFactory {
    constructor(edgeTypeFactory) {
        this.edgeTypeFactory = edgeTypeFactory;
        this.logger = new common_1.Logger(EdgeTypeDefinitionFactory_1.name);
    }
    create(objectMetadata, options) {
        const kind = object_type_definition_factory_1.ObjectTypeDefinitionKind.Edge;
        return {
            target: objectMetadata.id,
            kind,
            type: new graphql_1.GraphQLObjectType({
                name: `${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}${kind.toString()}`,
                description: objectMetadata.description,
                fields: () => this.generateFields(objectMetadata, options),
            }),
        };
    }
    generateFields(objectMetadata, options) {
        const fields = {};
        fields.node = {
            type: this.edgeTypeFactory.create(objectMetadata, EdgeTypeDefinitionKind.Node, options, {
                nullable: false,
            }),
        };
        fields.cursor = {
            type: this.edgeTypeFactory.create(objectMetadata, EdgeTypeDefinitionKind.Cursor, options, {
                nullable: false,
            }),
        };
        return fields;
    }
};
exports.EdgeTypeDefinitionFactory = EdgeTypeDefinitionFactory;
exports.EdgeTypeDefinitionFactory = EdgeTypeDefinitionFactory = EdgeTypeDefinitionFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [edge_type_factory_1.EdgeTypeFactory])
], EdgeTypeDefinitionFactory);
//# sourceMappingURL=edge-type-definition.factory.js.map