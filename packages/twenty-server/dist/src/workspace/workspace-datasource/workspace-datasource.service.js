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
exports.WorkspaceDataSourceService = void 0;
const common_1 = require("@nestjs/common");
const data_source_service_1 = require("../../metadata/data-source/data-source.service");
const typeorm_service_1 = require("../../database/typeorm/typeorm.service");
let WorkspaceDataSourceService = class WorkspaceDataSourceService {
    constructor(dataSourceService, typeormService) {
        this.dataSourceService = dataSourceService;
        this.typeormService = typeormService;
    }
    async connectToWorkspaceDataSource(workspaceId) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        const dataSource = await this.typeormService.connectToDataSource(dataSourceMetadata);
        if (!dataSource) {
            throw new Error(`Could not connect to workspace data source for workspace ${workspaceId}`);
        }
        return dataSource;
    }
    async createWorkspaceDBSchema(workspaceId) {
        const schemaName = this.getSchemaName(workspaceId);
        return await this.typeormService.createSchema(schemaName);
    }
    async deleteWorkspaceDBSchema(workspaceId) {
        const schemaName = this.getSchemaName(workspaceId);
        return await this.typeormService.deleteSchema(schemaName);
    }
    getSchemaName(workspaceId) {
        return `workspace_${this.uuidToBase36(workspaceId)}`;
    }
    uuidToBase36(uuid) {
        let devId = false;
        if (uuid.startsWith('twenty-')) {
            devId = true;
            uuid = uuid.replace('twenty-', '');
        }
        const hexString = uuid.replace(/-/g, '');
        const base10Number = BigInt('0x' + hexString);
        const base36String = base10Number.toString(36);
        return `${devId ? 'twenty_' : ''}${base36String}`;
    }
};
exports.WorkspaceDataSourceService = WorkspaceDataSourceService;
exports.WorkspaceDataSourceService = WorkspaceDataSourceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService])
], WorkspaceDataSourceService);
//# sourceMappingURL=workspace-datasource.service.js.map