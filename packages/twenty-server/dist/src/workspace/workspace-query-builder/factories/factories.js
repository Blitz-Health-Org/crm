"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceQueryBuilderFactories = void 0;
const args_alias_factory_1 = require("./args-alias.factory");
const args_string_factory_1 = require("./args-string.factory");
const relation_field_alias_factory_1 = require("./relation-field-alias.factory");
const create_many_query_factory_1 = require("./create-many-query.factory");
const delete_one_query_factory_1 = require("./delete-one-query.factory");
const field_alias_factory_1 = require("./field-alias.factory");
const fields_string_factory_1 = require("./fields-string.factory");
const find_many_query_factory_1 = require("./find-many-query.factory");
const find_one_query_factory_1 = require("./find-one-query.factory");
const update_one_query_factory_1 = require("./update-one-query.factory");
const update_many_query_factory_1 = require("./update-many-query.factory");
const delete_many_query_factory_1 = require("./delete-many-query.factory");
exports.workspaceQueryBuilderFactories = [
    args_alias_factory_1.ArgsAliasFactory,
    args_string_factory_1.ArgsStringFactory,
    relation_field_alias_factory_1.RelationFieldAliasFactory,
    create_many_query_factory_1.CreateManyQueryFactory,
    delete_one_query_factory_1.DeleteOneQueryFactory,
    field_alias_factory_1.FieldAliasFacotry,
    fields_string_factory_1.FieldsStringFactory,
    find_many_query_factory_1.FindManyQueryFactory,
    find_one_query_factory_1.FindOneQueryFactory,
    update_one_query_factory_1.UpdateOneQueryFactory,
    update_many_query_factory_1.UpdateManyQueryFactory,
    delete_many_query_factory_1.DeleteManyQueryFactory,
];
//# sourceMappingURL=factories.js.map