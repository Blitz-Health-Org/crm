"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BasicColumnActionFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicColumnActionFactory = void 0;
const common_1 = require("@nestjs/common");
const workspace_migration_entity_1 = require("../workspace-migration.entity");
const serialize_default_value_1 = require("../../field-metadata/utils/serialize-default-value");
const field_metadata_type_to_column_type_util_1 = require("../utils/field-metadata-type-to-column-type.util");
const column_action_abstract_factory_1 = require("./column-action-abstract.factory");
let BasicColumnActionFactory = BasicColumnActionFactory_1 = class BasicColumnActionFactory extends column_action_abstract_factory_1.ColumnActionAbstractFactory {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(BasicColumnActionFactory_1.name);
    }
    handleCreateAction(fieldMetadata, options) {
        var _a;
        const defaultValue = (_a = this.getDefaultValue(fieldMetadata.defaultValue)) !== null && _a !== void 0 ? _a : options === null || options === void 0 ? void 0 : options.defaultValue;
        const serializedDefaultValue = (0, serialize_default_value_1.serializeDefaultValue)(defaultValue);
        return {
            action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE,
            columnName: fieldMetadata.targetColumnMap.value,
            columnType: (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(fieldMetadata.type),
            isNullable: fieldMetadata.isNullable,
            defaultValue: serializedDefaultValue,
        };
    }
    handleAlterAction(currentFieldMetadata, alteredFieldMetadata, options) {
        var _a;
        const defaultValue = (_a = this.getDefaultValue(alteredFieldMetadata.defaultValue)) !== null && _a !== void 0 ? _a : options === null || options === void 0 ? void 0 : options.defaultValue;
        const serializedDefaultValue = (0, serialize_default_value_1.serializeDefaultValue)(defaultValue);
        return {
            action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.ALTER,
            currentColumnDefinition: {
                columnName: currentFieldMetadata.targetColumnMap.value,
                columnType: (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(currentFieldMetadata.type),
                isNullable: currentFieldMetadata.isNullable,
                defaultValue: (0, serialize_default_value_1.serializeDefaultValue)(this.getDefaultValue(currentFieldMetadata.defaultValue)),
            },
            alteredColumnDefinition: {
                columnName: alteredFieldMetadata.targetColumnMap.value,
                columnType: (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(alteredFieldMetadata.type),
                isNullable: alteredFieldMetadata.isNullable,
                defaultValue: serializedDefaultValue,
            },
        };
    }
    getDefaultValue(defaultValue) {
        if (!defaultValue)
            return null;
        if ('type' in defaultValue) {
            return defaultValue;
        }
        else {
            return defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.value;
        }
    }
};
exports.BasicColumnActionFactory = BasicColumnActionFactory;
exports.BasicColumnActionFactory = BasicColumnActionFactory = BasicColumnActionFactory_1 = __decorate([
    (0, common_1.Injectable)()
], BasicColumnActionFactory);
//# sourceMappingURL=basic-column-action.factory.js.map