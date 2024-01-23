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
exports.WorkspaceMigrationRunnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const workspace_migration_service_1 = require("../../metadata/workspace-migration/workspace-migration.service");
const workspace_datasource_service_1 = require("../workspace-datasource/workspace-datasource.service");
const workspace_migration_entity_1 = require("../../metadata/workspace-migration/workspace-migration.entity");
const workspace_cache_version_service_1 = require("../../metadata/workspace-cache-version/workspace-cache-version.service");
const workspace_migration_enum_service_1 = require("./services/workspace-migration-enum.service");
const custom_table_default_column_util_1 = require("./utils/custom-table-default-column.util");
let WorkspaceMigrationRunnerService = class WorkspaceMigrationRunnerService {
    constructor(workspaceDataSourceService, workspaceMigrationService, workspaceCacheVersionService, workspaceMigrationEnumService) {
        this.workspaceDataSourceService = workspaceDataSourceService;
        this.workspaceMigrationService = workspaceMigrationService;
        this.workspaceCacheVersionService = workspaceCacheVersionService;
        this.workspaceMigrationEnumService = workspaceMigrationEnumService;
    }
    async executeMigrationFromPendingMigrations(workspaceId) {
        const workspaceDataSource = await this.workspaceDataSourceService.connectToWorkspaceDataSource(workspaceId);
        if (!workspaceDataSource) {
            throw new Error('Workspace data source not found');
        }
        const pendingMigrations = await this.workspaceMigrationService.getPendingMigrations(workspaceId);
        if (pendingMigrations.length === 0) {
            return [];
        }
        const flattenedPendingMigrations = pendingMigrations.reduce((acc, pendingMigration) => {
            return [...acc, ...pendingMigration.migrations];
        }, []);
        const queryRunner = workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.createQueryRunner();
        const schemaName = this.workspaceDataSourceService.getSchemaName(workspaceId);
        for (const migration of flattenedPendingMigrations) {
            await this.handleTableChanges(queryRunner, schemaName, migration);
        }
        for (const pendingMigration of pendingMigrations) {
            await this.workspaceMigrationService.setAppliedAtForMigration(workspaceId, pendingMigration);
        }
        await queryRunner.release();
        await this.workspaceCacheVersionService.incrementVersion(workspaceId);
        return flattenedPendingMigrations;
    }
    async handleTableChanges(queryRunner, schemaName, tableMigration) {
        switch (tableMigration.action) {
            case 'create':
                await this.createTable(queryRunner, schemaName, tableMigration.name);
                break;
            case 'alter':
                await this.handleColumnChanges(queryRunner, schemaName, tableMigration.name, tableMigration === null || tableMigration === void 0 ? void 0 : tableMigration.columns);
                break;
            default:
                throw new Error(`Migration table action ${tableMigration.action} not supported`);
        }
    }
    async createTable(queryRunner, schemaName, tableName) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: tableName,
            schema: schemaName,
            columns: custom_table_default_column_util_1.customTableDefaultColumns,
        }), true);
        await queryRunner.query(`
      COMMENT ON TABLE "${schemaName}"."${tableName}" IS '@graphql({"totalCount": {"enabled": true}})';
    `);
    }
    async handleColumnChanges(queryRunner, schemaName, tableName, columnMigrations) {
        if (!columnMigrations || columnMigrations.length === 0) {
            return;
        }
        for (const columnMigration of columnMigrations) {
            switch (columnMigration.action) {
                case workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE:
                    await this.createColumn(queryRunner, schemaName, tableName, columnMigration);
                    break;
                case workspace_migration_entity_1.WorkspaceMigrationColumnActionType.ALTER:
                    await this.alterColumn(queryRunner, schemaName, tableName, columnMigration);
                    break;
                case workspace_migration_entity_1.WorkspaceMigrationColumnActionType.RELATION:
                    await this.createRelation(queryRunner, schemaName, tableName, columnMigration);
                    break;
                case workspace_migration_entity_1.WorkspaceMigrationColumnActionType.DROP:
                    await queryRunner.dropColumn(`${schemaName}.${tableName}`, columnMigration.columnName);
                    break;
                default:
                    throw new Error(`Migration column action not supported`);
            }
        }
    }
    async createColumn(queryRunner, schemaName, tableName, migrationColumn) {
        var _a;
        const hasColumn = await queryRunner.hasColumn(`${schemaName}.${tableName}`, migrationColumn.columnName);
        if (hasColumn) {
            return;
        }
        await queryRunner.addColumn(`${schemaName}.${tableName}`, new typeorm_1.TableColumn({
            name: migrationColumn.columnName,
            type: migrationColumn.columnType,
            default: migrationColumn.defaultValue,
            enum: (_a = migrationColumn.enum) === null || _a === void 0 ? void 0 : _a.filter((value) => typeof value === 'string'),
            isArray: migrationColumn.isArray,
            isNullable: migrationColumn.isNullable,
        }));
    }
    async alterColumn(queryRunner, schemaName, tableName, migrationColumn) {
        var _a, _b;
        const enumValues = migrationColumn.alteredColumnDefinition.enum;
        if (enumValues) {
            await this.workspaceMigrationEnumService.alterEnum(queryRunner, schemaName, tableName, migrationColumn);
        }
        await queryRunner.changeColumn(`${schemaName}.${tableName}`, new typeorm_1.TableColumn({
            name: migrationColumn.currentColumnDefinition.columnName,
            type: migrationColumn.currentColumnDefinition.columnType,
            default: migrationColumn.currentColumnDefinition.defaultValue,
            enum: (_a = migrationColumn.currentColumnDefinition.enum) === null || _a === void 0 ? void 0 : _a.filter((value) => typeof value === 'string'),
            isArray: migrationColumn.currentColumnDefinition.isArray,
            isNullable: migrationColumn.currentColumnDefinition.isNullable,
        }), new typeorm_1.TableColumn({
            name: migrationColumn.alteredColumnDefinition.columnName,
            type: migrationColumn.alteredColumnDefinition.columnType,
            default: migrationColumn.alteredColumnDefinition.defaultValue,
            enum: (_b = migrationColumn.currentColumnDefinition.enum) === null || _b === void 0 ? void 0 : _b.filter((value) => typeof value === 'string'),
            isArray: migrationColumn.alteredColumnDefinition.isArray,
            isNullable: migrationColumn.alteredColumnDefinition.isNullable,
        }));
    }
    async createRelation(queryRunner, schemaName, tableName, migrationColumn) {
        await queryRunner.createForeignKey(`${schemaName}.${tableName}`, new typeorm_1.TableForeignKey({
            columnNames: [migrationColumn.columnName],
            referencedColumnNames: [migrationColumn.referencedTableColumnName],
            referencedTableName: migrationColumn.referencedTableName,
            referencedSchema: schemaName,
            onDelete: 'CASCADE',
        }));
        if (migrationColumn.isUnique) {
            await queryRunner.createUniqueConstraint(`${schemaName}.${tableName}`, new typeorm_1.TableUnique({
                name: `UNIQUE_${tableName}_${migrationColumn.columnName}`,
                columnNames: [migrationColumn.columnName],
            }));
        }
    }
};
exports.WorkspaceMigrationRunnerService = WorkspaceMigrationRunnerService;
exports.WorkspaceMigrationRunnerService = WorkspaceMigrationRunnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [workspace_datasource_service_1.WorkspaceDataSourceService,
        workspace_migration_service_1.WorkspaceMigrationService,
        workspace_cache_version_service_1.WorkspaceCacheVersionService,
        workspace_migration_enum_service_1.WorkspaceMigrationEnumService])
], WorkspaceMigrationRunnerService);
//# sourceMappingURL=workspace-migration-runner.service.js.map