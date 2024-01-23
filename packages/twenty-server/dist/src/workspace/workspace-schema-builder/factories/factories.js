"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceSchemaBuilderFactories = void 0;
const enum_type_definition_factory_1 = require("./enum-type-definition.factory");
const args_factory_1 = require("./args.factory");
const input_type_factory_1 = require("./input-type.factory");
const input_type_definition_factory_1 = require("./input-type-definition.factory");
const object_type_definition_factory_1 = require("./object-type-definition.factory");
const output_type_factory_1 = require("./output-type.factory");
const query_type_factory_1 = require("./query-type.factory");
const root_type_factory_1 = require("./root-type.factory");
const filter_type_factory_1 = require("./filter-type.factory");
const filter_type_definition_factory_1 = require("./filter-type-definition.factory");
const connection_type_factory_1 = require("./connection-type.factory");
const connection_type_definition_factory_1 = require("./connection-type-definition.factory");
const edge_type_factory_1 = require("./edge-type.factory");
const edge_type_definition_factory_1 = require("./edge-type-definition.factory");
const mutation_type_factory_1 = require("./mutation-type.factory");
const order_by_type_factory_1 = require("./order-by-type.factory");
const order_by_type_definition_factory_1 = require("./order-by-type-definition.factory");
const relation_type_factory_1 = require("./relation-type.factory");
const extend_object_type_definition_factory_1 = require("./extend-object-type-definition.factory");
const orphaned_types_factory_1 = require("./orphaned-types.factory");
exports.workspaceSchemaBuilderFactories = [
    args_factory_1.ArgsFactory,
    input_type_factory_1.InputTypeFactory,
    input_type_definition_factory_1.InputTypeDefinitionFactory,
    output_type_factory_1.OutputTypeFactory,
    object_type_definition_factory_1.ObjectTypeDefinitionFactory,
    enum_type_definition_factory_1.EnumTypeDefinitionFactory,
    relation_type_factory_1.RelationTypeFactory,
    extend_object_type_definition_factory_1.ExtendObjectTypeDefinitionFactory,
    filter_type_factory_1.FilterTypeFactory,
    filter_type_definition_factory_1.FilterTypeDefinitionFactory,
    order_by_type_factory_1.OrderByTypeFactory,
    order_by_type_definition_factory_1.OrderByTypeDefinitionFactory,
    connection_type_factory_1.ConnectionTypeFactory,
    connection_type_definition_factory_1.ConnectionTypeDefinitionFactory,
    edge_type_factory_1.EdgeTypeFactory,
    edge_type_definition_factory_1.EdgeTypeDefinitionFactory,
    root_type_factory_1.RootTypeFactory,
    query_type_factory_1.QueryTypeFactory,
    mutation_type_factory_1.MutationTypeFactory,
    orphaned_types_factory_1.OrphanedTypesFactory,
];
//# sourceMappingURL=factories.js.map