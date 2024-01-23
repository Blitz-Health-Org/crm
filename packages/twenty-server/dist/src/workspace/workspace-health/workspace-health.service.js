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
exports.WorkspaceHealthService = void 0;
const common_1 = require("@nestjs/common");
const workspace_health_options_interface_1 = require("./interfaces/workspace-health-options.interface");
const typeorm_service_1 = require("../../database/typeorm/typeorm.service");
const data_source_service_1 = require("../../metadata/data-source/data-source.service");
const object_metadata_service_1 = require("../../metadata/object-metadata/object-metadata.service");
const workspace_datasource_service_1 = require("../workspace-datasource/workspace-datasource.service");
const object_metadata_health_service_1 = require("./services/object-metadata-health.service");
const field_metadata_health_service_1 = require("./services/field-metadata-health.service");
const relation_metadata_health_service_1 = require("./services/relation-metadata.health.service");
const database_structure_service_1 = require("./services/database-structure.service");
const compute_object_target_table_util_1 = require("../utils/compute-object-target-table.util");
let WorkspaceHealthService = class WorkspaceHealthService {
    constructor(dataSourceService, typeORMService, objectMetadataService, databaseStructureService, workspaceDataSourceService, objectMetadataHealthService, fieldMetadataHealthService, relationMetadataHealthService) {
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
        this.objectMetadataService = objectMetadataService;
        this.databaseStructureService = databaseStructureService;
        this.workspaceDataSourceService = workspaceDataSourceService;
        this.objectMetadataHealthService = objectMetadataHealthService;
        this.fieldMetadataHealthService = fieldMetadataHealthService;
        this.relationMetadataHealthService = relationMetadataHealthService;
    }
    async healthCheck(workspaceId, options = { mode: workspace_health_options_interface_1.WorkspaceHealthMode.All }) {
        const schemaName = this.workspaceDataSourceService.getSchemaName(workspaceId);
        const issues = [];
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        if (!dataSourceMetadata) {
            throw new common_1.NotFoundException(`DataSource for workspace id ${workspaceId} not found`);
        }
        await this.typeORMService.connectToDataSource(dataSourceMetadata);
        const objectMetadataCollection = await this.objectMetadataService.findManyWithinWorkspace(workspaceId);
        if (!objectMetadataCollection || objectMetadataCollection.length === 0) {
            throw new common_1.NotFoundException(`Workspace with id ${workspaceId} not found`);
        }
        for (const objectMetadata of objectMetadataCollection) {
            const tableName = (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata);
            const workspaceTableColumns = await this.databaseStructureService.getWorkspaceTableColumns(schemaName, tableName);
            if (!workspaceTableColumns || workspaceTableColumns.length === 0) {
                throw new common_1.NotFoundException(`Table ${tableName} not found in schema ${schemaName}`);
            }
            const objectIssues = await this.objectMetadataHealthService.healthCheck(schemaName, objectMetadata, options);
            issues.push(...objectIssues);
            const fieldIssues = await this.fieldMetadataHealthService.healthCheck((0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata), workspaceTableColumns, objectMetadata.fields, options);
            issues.push(...fieldIssues);
            const relationIssues = this.relationMetadataHealthService.healthCheck(workspaceTableColumns, objectMetadataCollection, objectMetadata, options);
            issues.push(...relationIssues);
        }
        return issues;
    }
};
exports.WorkspaceHealthService = WorkspaceHealthService;
exports.WorkspaceHealthService = WorkspaceHealthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService,
        object_metadata_service_1.ObjectMetadataService,
        database_structure_service_1.DatabaseStructureService,
        workspace_datasource_service_1.WorkspaceDataSourceService,
        object_metadata_health_service_1.ObjectMetadataHealthService,
        field_metadata_health_service_1.FieldMetadataHealthService,
        relation_metadata_health_service_1.RelationMetadataHealthService])
], WorkspaceHealthService);
//# sourceMappingURL=workspace-health.service.js.map