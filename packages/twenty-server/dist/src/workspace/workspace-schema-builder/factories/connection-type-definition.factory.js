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
var ConnectionTypeDefinitionFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTypeDefinitionFactory = exports.ConnectionTypeDefinitionKind = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const pascal_case_1 = require("../../../utils/pascal-case");
const object_type_definition_factory_1 = require("./object-type-definition.factory");
const connection_type_factory_1 = require("./connection-type.factory");
var ConnectionTypeDefinitionKind;
(function (ConnectionTypeDefinitionKind) {
    ConnectionTypeDefinitionKind["Edge"] = "Edge";
    ConnectionTypeDefinitionKind["PageInfo"] = "PageInfo";
})(ConnectionTypeDefinitionKind || (exports.ConnectionTypeDefinitionKind = ConnectionTypeDefinitionKind = {}));
let ConnectionTypeDefinitionFactory = ConnectionTypeDefinitionFactory_1 = class ConnectionTypeDefinitionFactory {
    constructor(connectionTypeFactory) {
        this.connectionTypeFactory = connectionTypeFactory;
        this.logger = new common_1.Logger(ConnectionTypeDefinitionFactory_1.name);
    }
    create(objectMetadata, options) {
        const kind = object_type_definition_factory_1.ObjectTypeDefinitionKind.Connection;
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
        fields.edges = {
            type: this.connectionTypeFactory.create(objectMetadata, ConnectionTypeDefinitionKind.Edge, options, {
                isArray: true,
                arrayDepth: 1,
                nullable: false,
            }),
        };
        fields.pageInfo = {
            type: this.connectionTypeFactory.create(objectMetadata, ConnectionTypeDefinitionKind.PageInfo, options, {
                nullable: false,
            }),
        };
        fields.totalCount = {
            type: graphql_1.GraphQLInt,
            description: 'Total number of records in the connection',
        };
        return fields;
    }
};
exports.ConnectionTypeDefinitionFactory = ConnectionTypeDefinitionFactory;
exports.ConnectionTypeDefinitionFactory = ConnectionTypeDefinitionFactory = ConnectionTypeDefinitionFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_type_factory_1.ConnectionTypeFactory])
], ConnectionTypeDefinitionFactory);
//# sourceMappingURL=connection-type-definition.factory.js.map