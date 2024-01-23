"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceResolverBuilderMethodNames = exports.workspaceResolverBuilderFactories = void 0;
const update_many_resolver_factory_1 = require("./update-many-resolver.factory");
const find_many_resolver_factory_1 = require("./find-many-resolver.factory");
const find_one_resolver_factory_1 = require("./find-one-resolver.factory");
const create_many_resolver_factory_1 = require("./create-many-resolver.factory");
const create_one_resolver_factory_1 = require("./create-one-resolver.factory");
const update_one_resolver_factory_1 = require("./update-one-resolver.factory");
const delete_one_resolver_factory_1 = require("./delete-one-resolver.factory");
const delete_many_resolver_factory_1 = require("./delete-many-resolver.factory");
const execute_quick_action_on_one_resolver_factory_1 = require("./execute-quick-action-on-one-resolver.factory");
exports.workspaceResolverBuilderFactories = [
    find_many_resolver_factory_1.FindManyResolverFactory,
    find_one_resolver_factory_1.FindOneResolverFactory,
    create_many_resolver_factory_1.CreateManyResolverFactory,
    create_one_resolver_factory_1.CreateOneResolverFactory,
    update_one_resolver_factory_1.UpdateOneResolverFactory,
    delete_one_resolver_factory_1.DeleteOneResolverFactory,
    execute_quick_action_on_one_resolver_factory_1.ExecuteQuickActionOnOneResolverFactory,
    update_many_resolver_factory_1.UpdateManyResolverFactory,
    delete_many_resolver_factory_1.DeleteManyResolverFactory,
];
exports.workspaceResolverBuilderMethodNames = {
    queries: [
        find_many_resolver_factory_1.FindManyResolverFactory.methodName,
        find_one_resolver_factory_1.FindOneResolverFactory.methodName,
    ],
    mutations: [
        create_many_resolver_factory_1.CreateManyResolverFactory.methodName,
        create_one_resolver_factory_1.CreateOneResolverFactory.methodName,
        update_one_resolver_factory_1.UpdateOneResolverFactory.methodName,
        delete_one_resolver_factory_1.DeleteOneResolverFactory.methodName,
        execute_quick_action_on_one_resolver_factory_1.ExecuteQuickActionOnOneResolverFactory.methodName,
        update_many_resolver_factory_1.UpdateManyResolverFactory.methodName,
        delete_many_resolver_factory_1.DeleteManyResolverFactory.methodName,
    ],
};
//# sourceMappingURL=factories.js.map