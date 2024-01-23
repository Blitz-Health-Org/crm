"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRestQueryBuilderFactories = void 0;
const delete_query_factory_1 = require("./delete-query.factory");
const create_query_factory_1 = require("./create-query.factory");
const update_query_factory_1 = require("./update-query.factory");
const find_one_query_factory_1 = require("./find-one-query.factory");
const find_many_query_factory_1 = require("./find-many-query.factory");
const delete_variables_factory_1 = require("./delete-variables.factory");
const create_variables_factory_1 = require("./create-variables.factory");
const update_variables_factory_1 = require("./update-variables.factory");
const get_variables_factory_1 = require("./get-variables.factory");
const last_cursor_input_factory_1 = require("./input-factories/last-cursor-input.factory");
const limit_input_factory_1 = require("./input-factories/limit-input.factory");
const order_by_input_factory_1 = require("./input-factories/order-by-input.factory");
const filter_input_factory_1 = require("./input-factories/filter-input.factory");
exports.apiRestQueryBuilderFactories = [
    delete_query_factory_1.DeleteQueryFactory,
    create_query_factory_1.CreateQueryFactory,
    update_query_factory_1.UpdateQueryFactory,
    find_one_query_factory_1.FindOneQueryFactory,
    find_many_query_factory_1.FindManyQueryFactory,
    delete_variables_factory_1.DeleteVariablesFactory,
    create_variables_factory_1.CreateVariablesFactory,
    update_variables_factory_1.UpdateVariablesFactory,
    get_variables_factory_1.GetVariablesFactory,
    last_cursor_input_factory_1.LastCursorInputFactory,
    limit_input_factory_1.LimitInputFactory,
    order_by_input_factory_1.OrderByInputFactory,
    filter_input_factory_1.FilterInputFactory,
];
//# sourceMappingURL=factories.js.map