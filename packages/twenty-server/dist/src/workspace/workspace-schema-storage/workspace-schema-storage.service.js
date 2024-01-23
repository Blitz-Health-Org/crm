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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSchemaStorageService = void 0;
const common_1 = require("@nestjs/common");
const inject_memory_storage_decorator_1 = require("../../integrations/memory-storage/decorators/inject-memory-storage.decorator");
const memory_storage_service_1 = require("../../integrations/memory-storage/memory-storage.service");
const workspace_cache_version_service_1 = require("../../metadata/workspace-cache-version/workspace-cache-version.service");
let WorkspaceSchemaStorageService = class WorkspaceSchemaStorageService {
    constructor(objectMetadataMemoryStorageService, typeDefsMemoryStorageService, usedScalarNamesMemoryStorageService, cacheVersionMemoryStorageService, workspaceCacheVersionService) {
        this.objectMetadataMemoryStorageService = objectMetadataMemoryStorageService;
        this.typeDefsMemoryStorageService = typeDefsMemoryStorageService;
        this.usedScalarNamesMemoryStorageService = usedScalarNamesMemoryStorageService;
        this.cacheVersionMemoryStorageService = cacheVersionMemoryStorageService;
        this.workspaceCacheVersionService = workspaceCacheVersionService;
    }
    async validateCacheVersion(workspaceId) {
        var _a;
        const currentVersion = (_a = (await this.cacheVersionMemoryStorageService.read({
            key: workspaceId,
        }))) !== null && _a !== void 0 ? _a : '0';
        const latestVersion = await this.workspaceCacheVersionService.getVersion(workspaceId);
        if (currentVersion !== latestVersion) {
            await this.invalidateCache(workspaceId);
            await this.cacheVersionMemoryStorageService.write({
                key: workspaceId,
                data: latestVersion,
            });
        }
    }
    setObjectMetadata(workspaceId, objectMetadata) {
        return this.objectMetadataMemoryStorageService.write({
            key: workspaceId,
            data: objectMetadata,
        });
    }
    getObjectMetadata(workspaceId) {
        return this.objectMetadataMemoryStorageService.read({
            key: workspaceId,
        });
    }
    setTypeDefs(workspaceId, typeDefs) {
        return this.typeDefsMemoryStorageService.write({
            key: workspaceId,
            data: typeDefs,
        });
    }
    getTypeDefs(workspaceId) {
        return this.typeDefsMemoryStorageService.read({
            key: workspaceId,
        });
    }
    setUsedScalarNames(workspaceId, scalarsUsed) {
        return this.usedScalarNamesMemoryStorageService.write({
            key: workspaceId,
            data: scalarsUsed,
        });
    }
    getUsedScalarNames(workspaceId) {
        return this.usedScalarNamesMemoryStorageService.read({
            key: workspaceId,
        });
    }
    async invalidateCache(workspaceId) {
        await this.objectMetadataMemoryStorageService.delete({ key: workspaceId });
        await this.typeDefsMemoryStorageService.delete({ key: workspaceId });
        await this.usedScalarNamesMemoryStorageService.delete({ key: workspaceId });
    }
};
exports.WorkspaceSchemaStorageService = WorkspaceSchemaStorageService;
exports.WorkspaceSchemaStorageService = WorkspaceSchemaStorageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, inject_memory_storage_decorator_1.InjectMemoryStorage)('objectMetadataCollection')),
    __param(1, (0, inject_memory_storage_decorator_1.InjectMemoryStorage)('typeDefs')),
    __param(2, (0, inject_memory_storage_decorator_1.InjectMemoryStorage)('usedScalarNames')),
    __param(3, (0, inject_memory_storage_decorator_1.InjectMemoryStorage)('cacheVersion')),
    __metadata("design:paramtypes", [memory_storage_service_1.MemoryStorageService,
        memory_storage_service_1.MemoryStorageService,
        memory_storage_service_1.MemoryStorageService,
        memory_storage_service_1.MemoryStorageService,
        workspace_cache_version_service_1.WorkspaceCacheVersionService])
], WorkspaceSchemaStorageService);
//# sourceMappingURL=workspace-schema-storage.service.js.map