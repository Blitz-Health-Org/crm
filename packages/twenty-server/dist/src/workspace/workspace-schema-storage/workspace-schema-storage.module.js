"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSchemaStorageModule = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("../../integrations/memory-storage/interfaces");
const memory_storage_module_1 = require("../../integrations/memory-storage/memory-storage.module");
const json_serializer_1 = require("../../integrations/memory-storage/serializers/json.serializer");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
const workspace_cache_version_module_1 = require("../../metadata/workspace-cache-version/workspace-cache-version.module");
const workspace_schema_storage_service_1 = require("./workspace-schema-storage.service");
let WorkspaceSchemaStorageModule = class WorkspaceSchemaStorageModule {
};
exports.WorkspaceSchemaStorageModule = WorkspaceSchemaStorageModule;
exports.WorkspaceSchemaStorageModule = WorkspaceSchemaStorageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            object_metadata_module_1.ObjectMetadataModule,
            workspace_cache_version_module_1.WorkspaceCacheVersionModule,
            memory_storage_module_1.MemoryStorageModule.forRoot({
                identifier: 'objectMetadataCollection',
                type: interfaces_1.MemoryStorageDriverType.Local,
                options: {},
                serializer: new json_serializer_1.MemoryStorageJsonSerializer(),
            }),
            memory_storage_module_1.MemoryStorageModule.forRoot({
                identifier: 'typeDefs',
                type: interfaces_1.MemoryStorageDriverType.Local,
                options: {},
            }),
            memory_storage_module_1.MemoryStorageModule.forRoot({
                identifier: 'usedScalarNames',
                type: interfaces_1.MemoryStorageDriverType.Local,
                options: {},
                serializer: new json_serializer_1.MemoryStorageJsonSerializer(),
            }),
            memory_storage_module_1.MemoryStorageModule.forRoot({
                identifier: 'cacheVersion',
                type: interfaces_1.MemoryStorageDriverType.Local,
                options: {},
            }),
        ],
        providers: [workspace_schema_storage_service_1.WorkspaceSchemaStorageService],
        exports: [workspace_schema_storage_service_1.WorkspaceSchemaStorageService],
    })
], WorkspaceSchemaStorageModule);
//# sourceMappingURL=workspace-schema-storage.module.js.map