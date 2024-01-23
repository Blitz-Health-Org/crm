"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceModule = void 0;
const common_1 = require("@nestjs/common");
const metadata_module_1 = require("../metadata/metadata.module");
const data_source_module_1 = require("../metadata/data-source/data-source.module");
const workspace_schema_storage_module_1 = require("./workspace-schema-storage/workspace-schema-storage.module");
const object_metadata_module_1 = require("../metadata/object-metadata/object-metadata.module");
const scalars_explorer_service_1 = require("./services/scalars-explorer.service");
const workspace_factory_1 = require("./workspace.factory");
const workspace_schema_builder_module_1 = require("./workspace-schema-builder/workspace-schema-builder.module");
const workspace_resolver_builder_module_1 = require("./workspace-resolver-builder/workspace-resolver-builder.module");
let WorkspaceModule = class WorkspaceModule {
};
exports.WorkspaceModule = WorkspaceModule;
exports.WorkspaceModule = WorkspaceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            metadata_module_1.MetadataModule,
            data_source_module_1.DataSourceModule,
            object_metadata_module_1.ObjectMetadataModule,
            workspace_schema_builder_module_1.WorkspaceSchemaBuilderModule,
            workspace_resolver_builder_module_1.WorkspaceResolverBuilderModule,
            workspace_schema_storage_module_1.WorkspaceSchemaStorageModule,
        ],
        providers: [workspace_factory_1.WorkspaceFactory, scalars_explorer_service_1.ScalarsExplorerService],
        exports: [workspace_factory_1.WorkspaceFactory],
    })
], WorkspaceModule);
//# sourceMappingURL=workspace.module.js.map