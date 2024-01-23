"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EnumColumnActionFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumColumnActionFactory = void 0;
const common_1 = require("@nestjs/common");
const field_metadata_entity_1 = require("../../field-metadata/field-metadata.entity");
const workspace_migration_entity_1 = require("../workspace-migration.entity");
const serialize_default_value_1 = require("../../field-metadata/utils/serialize-default-value");
const field_metadata_type_to_column_type_util_1 = require("../utils/field-metadata-type-to-column-type.util");
const column_action_abstract_factory_1 = require("./column-action-abstract.factory");
let EnumColumnActionFactory = EnumColumnActionFactory_1 = class EnumColumnActionFactory extends column_action_abstract_factory_1.ColumnActionAbstractFactory {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(EnumColumnActionFactory_1.name);
    }
    handleCreateAction(fieldMetadata, options) {
        var _a, _b;
        const defaultValue = (_b = (_a = fieldMetadata.defaultValue) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : options === null || options === void 0 ? void 0 : options.defaultValue;
        const serializedDefaultValue = (0, serialize_default_value_1.serializeDefaultValue)(defaultValue);
        const enumOptions = fieldMetadata.options
            ? [...fieldMetadata.options.map((option) => option.value)]
            : undefined;
        return {
            action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE,
            columnName: fieldMetadata.targetColumnMap.value,
            columnType: (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(fieldMetadata.type),
            enum: enumOptions,
            isArray: fieldMetadata.type === field_metadata_entity_1.FieldMetadataType.MULTI_SELECT,
            isNullable: fieldMetadata.isNullable,
            defaultValue: serializedDefaultValue,
        };
    }
    handleAlterAction(currentFieldMetadata, alteredFieldMetadata, options) {
        var _a, _b, _c;
        const defaultValue = (_b = (_a = alteredFieldMetadata.defaultValue) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : options === null || options === void 0 ? void 0 : options.defaultValue;
        const serializedDefaultValue = (0, serialize_default_value_1.serializeDefaultValue)(defaultValue);
        const enumOptions = alteredFieldMetadata.options
            ? [
                ...alteredFieldMetadata.options.map((option) => {
                    var _a;
                    const currentOption = (_a = currentFieldMetadata.options) === null || _a === void 0 ? void 0 : _a.find((currentOption) => currentOption.id === option.id);
                    if (currentOption && currentOption.value !== option.value) {
                        return {
                            from: currentOption.value,
                            to: option.value,
                        };
                    }
                    return option.value;
                }),
            ]
            : undefined;
        return {
            action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.ALTER,
            currentColumnDefinition: {
                columnName: currentFieldMetadata.targetColumnMap.value,
                columnType: (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(currentFieldMetadata.type),
                enum: currentFieldMetadata.options
                    ? [...currentFieldMetadata.options.map((option) => option.value)]
                    : undefined,
                isArray: currentFieldMetadata.type === field_metadata_entity_1.FieldMetadataType.MULTI_SELECT,
                isNullable: currentFieldMetadata.isNullable,
                defaultValue: (0, serialize_default_value_1.serializeDefaultValue)((_c = currentFieldMetadata.defaultValue) === null || _c === void 0 ? void 0 : _c.value),
            },
            alteredColumnDefinition: {
                columnName: alteredFieldMetadata.targetColumnMap.value,
                columnType: (0, field_metadata_type_to_column_type_util_1.fieldMetadataTypeToColumnType)(alteredFieldMetadata.type),
                enum: enumOptions,
                isArray: alteredFieldMetadata.type === field_metadata_entity_1.FieldMetadataType.MULTI_SELECT,
                isNullable: alteredFieldMetadata.isNullable,
                defaultValue: serializedDefaultValue,
            },
        };
    }
};
exports.EnumColumnActionFactory = EnumColumnActionFactory;
exports.EnumColumnActionFactory = EnumColumnActionFactory = EnumColumnActionFactory_1 = __decorate([
    (0, common_1.Injectable)()
], EnumColumnActionFactory);
//# sourceMappingURL=enum-column-action.factory.js.map