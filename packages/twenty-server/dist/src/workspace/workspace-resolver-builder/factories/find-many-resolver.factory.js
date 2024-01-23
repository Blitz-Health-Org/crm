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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyResolverFactory = void 0;
const common_1 = require("@nestjs/common");
const workspace_query_runner_service_1 = require("../../workspace-query-runner/workspace-query-runner.service");
let FindManyResolverFactory = class FindManyResolverFactory {
    constructor(workspaceQueryRunnerService) {
        this.workspaceQueryRunnerService = workspaceQueryRunnerService;
    }
    create(context) {
        const internalContext = context;
        return (_source, args, context, info) => {
            return this.workspaceQueryRunnerService.findMany(args, {
                objectMetadataItem: internalContext.objectMetadataItem,
                workspaceId: internalContext.workspaceId,
                info,
                fieldMetadataCollection: internalContext.fieldMetadataCollection,
                objectMetadataCollection: internalContext.objectMetadataCollection,
            });
        };
    }
};
exports.FindManyResolverFactory = FindManyResolverFactory;
FindManyResolverFactory.methodName = 'findMany';
exports.FindManyResolverFactory = FindManyResolverFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [workspace_query_runner_service_1.WorkspaceQueryRunnerService])
], FindManyResolverFactory);
//# sourceMappingURL=find-many-resolver.factory.js.map