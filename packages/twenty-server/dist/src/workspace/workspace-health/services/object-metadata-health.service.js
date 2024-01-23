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
exports.ObjectMetadataHealthService = void 0;
const common_1 = require("@nestjs/common");
const workspace_health_issue_interface_1 = require("../interfaces/workspace-health-issue.interface");
const valid_name_util_1 = require("../utils/valid-name.util");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const compute_object_target_table_util_1 = require("../../utils/compute-object-target-table.util");
let ObjectMetadataHealthService = class ObjectMetadataHealthService {
    constructor(typeORMService) {
        this.typeORMService = typeORMService;
    }
    async healthCheck(schemaName, objectMetadata, options) {
        const issues = [];
        if (options.mode === 'structure' || options.mode === 'all') {
            const structureIssues = await this.structureObjectCheck(schemaName, objectMetadata);
            issues.push(...structureIssues);
        }
        if (options.mode === 'metadata' || options.mode === 'all') {
            const metadataIssues = this.metadataObjectCheck(objectMetadata);
            issues.push(...metadataIssues);
        }
        return issues;
    }
    async structureObjectCheck(schemaName, objectMetadata) {
        const mainDataSource = this.typeORMService.getMainDataSource();
        const issues = [];
        const tableExist = await mainDataSource.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = '${schemaName}' 
        AND table_name = '${(0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata)}')`);
        if (!tableExist) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.MISSING_TABLE,
                objectMetadata,
                message: `Table ${(0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata)} not found in schema ${schemaName}`,
            });
            return issues;
        }
        return issues;
    }
    metadataObjectCheck(objectMetadata) {
        const issues = [];
        if (!objectMetadata.dataSourceId) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.TABLE_DATA_SOURCE_ID_NOT_VALID,
                objectMetadata,
                message: `Table ${(0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata)} doesn't have a data source`,
            });
        }
        if (!objectMetadata.nameSingular ||
            !objectMetadata.namePlural ||
            !(0, valid_name_util_1.validName)(objectMetadata.nameSingular) ||
            !(0, valid_name_util_1.validName)(objectMetadata.namePlural) ||
            !objectMetadata.labelSingular ||
            !objectMetadata.labelPlural) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.TABLE_NAME_NOT_VALID,
                objectMetadata,
                message: `Table ${(0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata)} doesn't have a valid name or label`,
            });
        }
        return issues;
    }
};
exports.ObjectMetadataHealthService = ObjectMetadataHealthService;
exports.ObjectMetadataHealthService = ObjectMetadataHealthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_service_1.TypeORMService])
], ObjectMetadataHealthService);
//# sourceMappingURL=object-metadata-health.service.js.map