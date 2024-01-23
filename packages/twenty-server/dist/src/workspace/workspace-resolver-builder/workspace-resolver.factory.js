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
var WorkspaceResolverFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceResolverFactory = void 0;
const common_1 = require("@nestjs/common");
const get_resolver_name_util_1 = require("../utils/get-resolver-name.util");
const update_many_resolver_factory_1 = require("./factories/update-many-resolver.factory");
const delete_many_resolver_factory_1 = require("./factories/delete-many-resolver.factory");
const execute_quick_action_on_one_resolver_factory_1 = require("./factories/execute-quick-action-on-one-resolver.factory");
const find_many_resolver_factory_1 = require("./factories/find-many-resolver.factory");
const find_one_resolver_factory_1 = require("./factories/find-one-resolver.factory");
const create_many_resolver_factory_1 = require("./factories/create-many-resolver.factory");
const create_one_resolver_factory_1 = require("./factories/create-one-resolver.factory");
const update_one_resolver_factory_1 = require("./factories/update-one-resolver.factory");
const delete_one_resolver_factory_1 = require("./factories/delete-one-resolver.factory");
let WorkspaceResolverFactory = WorkspaceResolverFactory_1 = class WorkspaceResolverFactory {
    constructor(findManyResolverFactory, findOneResolverFactory, createManyResolverFactory, createOneResolverFactory, updateOneResolverFactory, deleteOneResolverFactory, executeQuickActionOnOneResolverFactory, updateManyResolverFactory, deleteManyResolverFactory) {
        this.findManyResolverFactory = findManyResolverFactory;
        this.findOneResolverFactory = findOneResolverFactory;
        this.createManyResolverFactory = createManyResolverFactory;
        this.createOneResolverFactory = createOneResolverFactory;
        this.updateOneResolverFactory = updateOneResolverFactory;
        this.deleteOneResolverFactory = deleteOneResolverFactory;
        this.executeQuickActionOnOneResolverFactory = executeQuickActionOnOneResolverFactory;
        this.updateManyResolverFactory = updateManyResolverFactory;
        this.deleteManyResolverFactory = deleteManyResolverFactory;
        this.logger = new common_1.Logger(WorkspaceResolverFactory_1.name);
    }
    async create(workspaceId, objectMetadataCollection, workspaceResolverBuilderMethods) {
        const factories = new Map([
            ['findMany', this.findManyResolverFactory],
            ['findOne', this.findOneResolverFactory],
            ['createMany', this.createManyResolverFactory],
            ['createOne', this.createOneResolverFactory],
            ['updateOne', this.updateOneResolverFactory],
            ['deleteOne', this.deleteOneResolverFactory],
            ['executeQuickActionOnOne', this.executeQuickActionOnOneResolverFactory],
            ['updateMany', this.updateManyResolverFactory],
            ['deleteMany', this.deleteManyResolverFactory],
        ]);
        const resolvers = {
            Query: {},
            Mutation: {},
        };
        for (const objectMetadata of objectMetadataCollection) {
            for (const methodName of workspaceResolverBuilderMethods.queries) {
                const resolverName = (0, get_resolver_name_util_1.getResolverName)(objectMetadata, methodName);
                const resolverFactory = factories.get(methodName);
                if (!resolverFactory) {
                    this.logger.error(`Unknown query resolver type: ${methodName}`, {
                        objectMetadata,
                        methodName,
                        resolverName,
                    });
                    throw new Error(`Unknown query resolver type: ${methodName}`);
                }
                resolvers.Query[resolverName] = resolverFactory.create({
                    workspaceId,
                    objectMetadataItem: objectMetadata,
                    fieldMetadataCollection: objectMetadata.fields,
                    objectMetadataCollection: objectMetadataCollection,
                });
            }
            for (const methodName of workspaceResolverBuilderMethods.mutations) {
                const resolverName = (0, get_resolver_name_util_1.getResolverName)(objectMetadata, methodName);
                const resolverFactory = factories.get(methodName);
                if (!resolverFactory) {
                    this.logger.error(`Unknown mutation resolver type: ${methodName}`, {
                        objectMetadata,
                        methodName,
                        resolverName,
                    });
                    throw new Error(`Unknown mutation resolver type: ${methodName}`);
                }
                resolvers.Mutation[resolverName] = resolverFactory.create({
                    workspaceId,
                    objectMetadataItem: objectMetadata,
                    fieldMetadataCollection: objectMetadata.fields,
                    objectMetadataCollection: objectMetadataCollection,
                });
            }
        }
        return resolvers;
    }
};
exports.WorkspaceResolverFactory = WorkspaceResolverFactory;
exports.WorkspaceResolverFactory = WorkspaceResolverFactory = WorkspaceResolverFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_many_resolver_factory_1.FindManyResolverFactory,
        find_one_resolver_factory_1.FindOneResolverFactory,
        create_many_resolver_factory_1.CreateManyResolverFactory,
        create_one_resolver_factory_1.CreateOneResolverFactory,
        update_one_resolver_factory_1.UpdateOneResolverFactory,
        delete_one_resolver_factory_1.DeleteOneResolverFactory,
        execute_quick_action_on_one_resolver_factory_1.ExecuteQuickActionOnOneResolverFactory,
        update_many_resolver_factory_1.UpdateManyResolverFactory,
        delete_many_resolver_factory_1.DeleteManyResolverFactory])
], WorkspaceResolverFactory);
//# sourceMappingURL=workspace-resolver.factory.js.map