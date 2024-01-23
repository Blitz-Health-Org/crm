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
exports.TypeORMService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const environment_service_1 = require("../../integrations/environment/environment.service");
const user_entity_1 = require("../../core/user/user.entity");
const workspace_entity_1 = require("../../core/workspace/workspace.entity");
const refresh_token_entity_1 = require("../../core/refresh-token/refresh-token.entity");
const feature_flag_entity_1 = require("../../core/feature-flag/feature-flag.entity");
let TypeORMService = class TypeORMService {
    constructor(environmentService) {
        this.environmentService = environmentService;
        this.dataSources = new Map();
        this.isDatasourceInitializing = new Map();
        this.mainDataSource = new typeorm_1.DataSource({
            url: environmentService.getPGDatabaseUrl(),
            type: 'postgres',
            logging: false,
            schema: 'core',
            entities: [user_entity_1.User, workspace_entity_1.Workspace, refresh_token_entity_1.RefreshToken, feature_flag_entity_1.FeatureFlagEntity],
        });
    }
    getMainDataSource() {
        return this.mainDataSource;
    }
    async connectToDataSource(dataSource) {
        const isMultiDatasourceEnabled = false;
        if (isMultiDatasourceEnabled) {
            while (this.isDatasourceInitializing.get(dataSource.id)) {
                await new Promise((resolve) => setTimeout(resolve, 10));
            }
            if (this.dataSources.has(dataSource.id)) {
                return this.dataSources.get(dataSource.id);
            }
            this.isDatasourceInitializing.set(dataSource.id, true);
            try {
                const dataSourceInstance = await this.createAndInitializeDataSource(dataSource);
                this.dataSources.set(dataSource.id, dataSourceInstance);
                return dataSourceInstance;
            }
            finally {
                this.isDatasourceInitializing.delete(dataSource.id);
            }
        }
        return this.mainDataSource;
    }
    async createAndInitializeDataSource(dataSource) {
        var _a;
        const schema = dataSource.schema;
        const workspaceDataSource = new typeorm_1.DataSource({
            url: (_a = dataSource.url) !== null && _a !== void 0 ? _a : this.environmentService.getPGDatabaseUrl(),
            type: 'postgres',
            logging: this.environmentService.isDebugMode()
                ? ['query', 'error']
                : ['error'],
            schema,
        });
        await workspaceDataSource.initialize();
        return workspaceDataSource;
    }
    async disconnectFromDataSource(dataSourceId) {
        if (!this.dataSources.has(dataSourceId)) {
            return;
        }
        const dataSource = this.dataSources.get(dataSourceId);
        await (dataSource === null || dataSource === void 0 ? void 0 : dataSource.destroy());
        this.dataSources.delete(dataSourceId);
    }
    async createSchema(schemaName) {
        const queryRunner = this.mainDataSource.createQueryRunner();
        await queryRunner.createSchema(schemaName, true);
        await queryRunner.release();
        return schemaName;
    }
    async deleteSchema(schemaName) {
        const queryRunner = this.mainDataSource.createQueryRunner();
        await queryRunner.dropSchema(schemaName, true, true);
        await queryRunner.release();
    }
    async onModuleInit() {
        await this.mainDataSource.initialize();
    }
    async onModuleDestroy() {
        await this.mainDataSource.destroy();
        for (const [, dataSource] of this.dataSources) {
            await dataSource.destroy();
        }
    }
};
exports.TypeORMService = TypeORMService;
exports.TypeORMService = TypeORMService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], TypeORMService);
//# sourceMappingURL=typeorm.service.js.map