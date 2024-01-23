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
var WorkspaceQueryBuilderFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceQueryBuilderFactory = void 0;
const common_1 = require("@nestjs/common");
const find_many_query_factory_1 = require("./factories/find-many-query.factory");
const find_one_query_factory_1 = require("./factories/find-one-query.factory");
const create_many_query_factory_1 = require("./factories/create-many-query.factory");
const update_one_query_factory_1 = require("./factories/update-one-query.factory");
const delete_one_query_factory_1 = require("./factories/delete-one-query.factory");
const update_many_query_factory_1 = require("./factories/update-many-query.factory");
const delete_many_query_factory_1 = require("./factories/delete-many-query.factory");
let WorkspaceQueryBuilderFactory = WorkspaceQueryBuilderFactory_1 = class WorkspaceQueryBuilderFactory {
    constructor(findManyQueryFactory, findOneQueryFactory, createManyQueryFactory, updateOneQueryFactory, deleteOneQueryFactory, updateManyQueryFactory, deleteManyQueryFactory) {
        this.findManyQueryFactory = findManyQueryFactory;
        this.findOneQueryFactory = findOneQueryFactory;
        this.createManyQueryFactory = createManyQueryFactory;
        this.updateOneQueryFactory = updateOneQueryFactory;
        this.deleteOneQueryFactory = deleteOneQueryFactory;
        this.updateManyQueryFactory = updateManyQueryFactory;
        this.deleteManyQueryFactory = deleteManyQueryFactory;
        this.logger = new common_1.Logger(WorkspaceQueryBuilderFactory_1.name);
    }
    findMany(args, options) {
        return this.findManyQueryFactory.create(args, options);
    }
    findOne(args, options) {
        return this.findOneQueryFactory.create(args, options);
    }
    createMany(args, options) {
        return this.createManyQueryFactory.create(args, options);
    }
    updateOne(initialArgs, options) {
        return this.updateOneQueryFactory.create(initialArgs, options);
    }
    deleteOne(args, options) {
        return this.deleteOneQueryFactory.create(args, options);
    }
    updateMany(args, options) {
        return this.updateManyQueryFactory.create(args, options);
    }
    deleteMany(args, options) {
        return this.deleteManyQueryFactory.create(args, options);
    }
};
exports.WorkspaceQueryBuilderFactory = WorkspaceQueryBuilderFactory;
exports.WorkspaceQueryBuilderFactory = WorkspaceQueryBuilderFactory = WorkspaceQueryBuilderFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_many_query_factory_1.FindManyQueryFactory,
        find_one_query_factory_1.FindOneQueryFactory,
        create_many_query_factory_1.CreateManyQueryFactory,
        update_one_query_factory_1.UpdateOneQueryFactory,
        delete_one_query_factory_1.DeleteOneQueryFactory,
        update_many_query_factory_1.UpdateManyQueryFactory,
        delete_many_query_factory_1.DeleteManyQueryFactory])
], WorkspaceQueryBuilderFactory);
//# sourceMappingURL=workspace-query-builder.factory.js.map