"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceMigrationEnumService = void 0;
const common_1 = require("@nestjs/common");
let WorkspaceMigrationEnumService = class WorkspaceMigrationEnumService {
    async alterEnum(queryRunner, schemaName, tableName, migrationColumn) {
        var _a, _b, _c;
        const columnDefinition = migrationColumn.alteredColumnDefinition;
        const oldEnumTypeName = `${tableName}_${columnDefinition.columnName}_enum`;
        const newEnumTypeName = `${tableName}_${columnDefinition.columnName}_enum_new`;
        const enumValues = (_b = (_a = columnDefinition.enum) === null || _a === void 0 ? void 0 : _a.map((enumValue) => {
            if (typeof enumValue === 'string') {
                return enumValue;
            }
            return enumValue.to;
        })) !== null && _b !== void 0 ? _b : [];
        if (!columnDefinition.isNullable && !columnDefinition.defaultValue) {
            columnDefinition.defaultValue = (_c = columnDefinition.enum) === null || _c === void 0 ? void 0 : _c[0];
        }
        await this.createNewEnumType(newEnumTypeName, queryRunner, schemaName, enumValues);
        await queryRunner.query(`
      ALTER TABLE "${schemaName}"."${tableName}"
      ALTER COLUMN "${columnDefinition.columnName}" TYPE TEXT
    `);
        await this.migrateEnumValues(queryRunner, schemaName, tableName, migrationColumn);
        await this.handleMissingEnumValues(queryRunner, schemaName, tableName, migrationColumn, enumValues);
        await this.updateColumnToNewEnum(queryRunner, schemaName, tableName, columnDefinition.columnName, newEnumTypeName);
        await this.dropOldEnumType(queryRunner, schemaName, oldEnumTypeName);
        await this.renameEnumType(queryRunner, schemaName, oldEnumTypeName, newEnumTypeName);
    }
    async createNewEnumType(name, queryRunner, schemaName, newValues) {
        const enumValues = newValues
            .map((value) => `'${value.replace(/'/g, "''")}'`)
            .join(', ');
        await queryRunner.query(`CREATE TYPE "${schemaName}"."${name}" AS ENUM (${enumValues})`);
    }
    async migrateEnumValues(queryRunner, schemaName, tableName, migrationColumn) {
        const columnDefinition = migrationColumn.alteredColumnDefinition;
        if (!columnDefinition.enum) {
            return;
        }
        for (const enumValue of columnDefinition.enum) {
            if (typeof enumValue === 'string') {
                continue;
            }
            await queryRunner.query(`
        UPDATE "${schemaName}"."${tableName}"
        SET "${columnDefinition.columnName}" = '${enumValue.to}'
        WHERE "${columnDefinition.columnName}" = '${enumValue.from}'
      `);
        }
    }
    async handleMissingEnumValues(queryRunner, schemaName, tableName, migrationColumn, enumValues) {
        const columnDefinition = migrationColumn.alteredColumnDefinition;
        let defaultValue = 'NULL';
        if (columnDefinition.defaultValue) {
            if (Array.isArray(columnDefinition.defaultValue)) {
                defaultValue = `ARRAY[${columnDefinition.defaultValue
                    .map((e) => `'${e}'`)
                    .join(', ')}]`;
            }
            else {
                defaultValue = `'${columnDefinition.defaultValue}'`;
            }
        }
        await queryRunner.query(`
      UPDATE "${schemaName}"."${tableName}"
      SET "${columnDefinition.columnName}" = ${defaultValue}
      WHERE "${columnDefinition.columnName}" NOT IN (${enumValues
            .map((e) => `'${e}'`)
            .join(', ')})
    `);
    }
    async updateColumnToNewEnum(queryRunner, schemaName, tableName, columnName, newEnumTypeName) {
        await queryRunner.query(`ALTER TABLE "${schemaName}"."${tableName}" ALTER COLUMN "${columnName}" TYPE "${schemaName}"."${newEnumTypeName}" USING ("${columnName}"::text::"${schemaName}"."${newEnumTypeName}")`);
    }
    async dropOldEnumType(queryRunner, schemaName, oldEnumTypeName) {
        await queryRunner.query(`DROP TYPE IF EXISTS "${schemaName}"."${oldEnumTypeName}"`);
    }
    async renameEnumType(queryRunner, schemaName, oldEnumTypeName, newEnumTypeName) {
        await queryRunner.query(`
      ALTER TYPE "${schemaName}"."${newEnumTypeName}"
      RENAME TO "${oldEnumTypeName}"
    `);
    }
};
exports.WorkspaceMigrationEnumService = WorkspaceMigrationEnumService;
exports.WorkspaceMigrationEnumService = WorkspaceMigrationEnumService = __decorate([
    (0, common_1.Injectable)()
], WorkspaceMigrationEnumService);
//# sourceMappingURL=workspace-migration-enum.service.js.map