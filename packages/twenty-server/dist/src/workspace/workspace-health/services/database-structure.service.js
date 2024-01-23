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
exports.DatabaseStructureService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const field_metadata_type_to_column_type_util_1 = require("../../../metadata/workspace-migration/utils/field-metadata-type-to-column-type.util");
const serialize_type_default_value_util_1 = require("../../../metadata/field-metadata/utils/serialize-type-default-value.util");
let DatabaseStructureService = class DatabaseStructureService {
    constructor(typeORMService) {
        this.typeORMService = typeORMService;
    }
    async getWorkspaceTableColumns(schemaName, tableName) {
        const mainDataSource = this.typeORMService.getMainDataSource();
        const results = await mainDataSource.query(`
      WITH foreign_keys AS (
        SELECT
          kcu.table_schema AS schema_name,
          kcu.table_name AS table_name,
          kcu.column_name AS column_name,
          tc.constraint_name AS constraint_name
        FROM
          information_schema.key_column_usage AS kcu
        JOIN
          information_schema.table_constraints AS tc
          ON tc.constraint_name = kcu.constraint_name
          AND tc.table_schema = kcu.table_schema
        WHERE
          tc.constraint_type = 'FOREIGN KEY'
          AND tc.table_schema = '${schemaName}'
          AND tc.table_name = '${tableName}'
        ),
        unique_constraints AS (
          SELECT
            tc.table_schema AS schema_name,
            tc.table_name AS table_name,
            kcu.column_name AS column_name
          FROM
            information_schema.key_column_usage AS kcu
          JOIN
            information_schema.table_constraints AS tc
            ON tc.constraint_name = kcu.constraint_name
            AND tc.table_schema = kcu.table_schema
          WHERE
            tc.constraint_type = 'UNIQUE'
            AND tc.table_schema = '${schemaName}'
            AND tc.table_name = '${tableName}'
        )
        SELECT
          c.table_schema AS "tableSchema",
          c.table_name AS "tableName",
          c.column_name AS "columnName",
          CASE 
            WHEN (c.data_type = 'USER-DEFINED') THEN c.udt_name 
            ELSE data_type
          END AS "dataType",
          c.is_nullable AS "isNullable",
          c.column_default AS "columnDefault",
          CASE
            WHEN pk.constraint_type = 'PRIMARY KEY' THEN 'TRUE'
            ELSE 'FALSE'
          END AS "isPrimaryKey",
          CASE
            WHEN fk.constraint_name IS NOT NULL THEN 'TRUE'
            ELSE 'FALSE'
          END AS "isForeignKey",
          CASE
            WHEN uc.column_name IS NOT NULL THEN 'TRUE'
            ELSE 'FALSE'
          END AS "isUnique"
        FROM
          information_schema.columns AS c
        LEFT JOIN
          information_schema.constraint_column_usage AS ccu
          ON c.column_name = ccu.column_name
          AND c.table_name = ccu.table_name
          AND c.table_schema = ccu.table_schema
        LEFT JOIN
          information_schema.table_constraints AS pk
          ON pk.constraint_name = ccu.constraint_name
          AND pk.constraint_type = 'PRIMARY KEY'
          AND pk.table_name = c.table_name
          AND pk.table_schema = c.table_schema
        LEFT JOIN
          foreign_keys AS fk
          ON c.table_schema = fk.schema_name
          AND c.table_name = fk.table_name
          AND c.column_name = fk.column_name
        LEFT JOIN
          unique_constraints AS uc
          ON c.table_schema = uc.schema_name
          AND c.table_name = uc.table_name
          AND c.column_name = uc.column_name
        WHERE
          c.table_schema = '${schemaName}'
          AND c.table_name = '${tableName}';
    `);
        if (!results || results.length === 0) {
            return [];
        }
        return results.map((item) => (Object.assign(Object.assign({}, item), { isNullable: item.isNullable === 'YES', isPrimaryKey: item.isPrimaryKey === 'TRUE', isForeignKey: item.isForeignKey === 'TRUE', isUnique: item.isUnique === 'TRUE' })));
    }
    getPostgresDataType(fieldMetadataType, fieldMetadataName, objectMetadataNameSingular) {
        const typeORMType = (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(fieldMetadataType);
        const mainDataSource = this.typeORMService.getMainDataSource();
        if (typeORMType === 'enum') {
            return `${objectMetadataNameSingular}_${fieldMetadataName}_enum`;
        }
        return mainDataSource.driver.normalizeType({
            type: typeORMType,
        });
    }
    getPostgresDefault(fieldMetadataType, defaultValue) {
        const typeORMType = (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(fieldMetadataType);
        const mainDataSource = this.typeORMService.getMainDataSource();
        if (defaultValue && 'type' in defaultValue) {
            const serializedDefaultValue = (0, serialize_type_default_value_util_1.serializeTypeDefaultValue)(defaultValue);
            if (serializedDefaultValue === 'public.uuid_generate_v4()') {
                return 'uuid_generate_v4()';
            }
            return serializedDefaultValue;
        }
        const value = defaultValue && 'value' in defaultValue ? defaultValue.value : null;
        if (typeof value === 'number') {
            return value.toString();
        }
        return mainDataSource.driver.normalizeDefault({
            type: typeORMType,
            default: value,
            isArray: false,
        });
    }
};
exports.DatabaseStructureService = DatabaseStructureService;
exports.DatabaseStructureService = DatabaseStructureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_service_1.TypeORMService])
], DatabaseStructureService);
//# sourceMappingURL=database-structure.service.js.map