"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceHealthModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const data_source_module_1 = require("../../metadata/data-source/data-source.module");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
const workspace_datasource_module_1 = require("../workspace-datasource/workspace-datasource.module");
const database_structure_service_1 = require("./services/database-structure.service");
const field_metadata_health_service_1 = require("./services/field-metadata-health.service");
const object_metadata_health_service_1 = require("./services/object-metadata-health.service");
const relation_metadata_health_service_1 = require("./services/relation-metadata.health.service");
const workspace_health_service_1 = require("./workspace-health.service");
let WorkspaceHealthModule = class WorkspaceHealthModule {
};
exports.WorkspaceHealthModule = WorkspaceHealthModule;
exports.WorkspaceHealthModule = WorkspaceHealthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            data_source_module_1.DataSourceModule,
            typeorm_module_1.TypeORMModule,
            object_metadata_module_1.ObjectMetadataModule,
            workspace_datasource_module_1.WorkspaceDataSourceModule,
        ],
        providers: [
            workspace_health_service_1.WorkspaceHealthService,
            database_structure_service_1.DatabaseStructureService,
            object_metadata_health_service_1.ObjectMetadataHealthService,
            field_metadata_health_service_1.FieldMetadataHealthService,
            relation_metadata_health_service_1.RelationMetadataHealthService,
        ],
        exports: [workspace_health_service_1.WorkspaceHealthService],
    })
], WorkspaceHealthModule);
//# sourceMappingURL=workspace-health.module.js.map