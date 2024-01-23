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
var WorkspaceMigrationFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceMigrationFactory = void 0;
const common_1 = require("@nestjs/common");
const field_metadata_entity_1 = require("../field-metadata/field-metadata.entity");
const basic_column_action_factory_1 = require("./factories/basic-column-action.factory");
const enum_column_action_factory_1 = require("./factories/enum-column-action.factory");
const workspace_migration_entity_1 = require("./workspace-migration.entity");
const is_composite_field_metadata_type_util_1 = require("../field-metadata/utils/is-composite-field-metadata-type.util");
const composite_types_1 = require("../field-metadata/composite-types");
let WorkspaceMigrationFactory = WorkspaceMigrationFactory_1 = class WorkspaceMigrationFactory {
    constructor(basicColumnActionFactory, enumColumnActionFactory) {
        this.basicColumnActionFactory = basicColumnActionFactory;
        this.enumColumnActionFactory = enumColumnActionFactory;
        this.logger = new common_1.Logger(WorkspaceMigrationFactory_1.name);
        this.factoriesMap = new Map([
            [field_metadata_entity_1.FieldMetadataType.UUID, { factory: this.basicColumnActionFactory }],
            [
                field_metadata_entity_1.FieldMetadataType.TEXT,
                {
                    factory: this.basicColumnActionFactory,
                    options: {
                        defaultValue: '',
                    },
                },
            ],
            [
                field_metadata_entity_1.FieldMetadataType.PHONE,
                {
                    factory: this.basicColumnActionFactory,
                    options: {
                        defaultValue: '',
                    },
                },
            ],
            [
                field_metadata_entity_1.FieldMetadataType.EMAIL,
                {
                    factory: this.basicColumnActionFactory,
                    options: {
                        defaultValue: '',
                    },
                },
            ],
            [field_metadata_entity_1.FieldMetadataType.NUMERIC, { factory: this.basicColumnActionFactory }],
            [field_metadata_entity_1.FieldMetadataType.NUMBER, { factory: this.basicColumnActionFactory }],
            [
                field_metadata_entity_1.FieldMetadataType.PROBABILITY,
                { factory: this.basicColumnActionFactory },
            ],
            [field_metadata_entity_1.FieldMetadataType.BOOLEAN, { factory: this.basicColumnActionFactory }],
            [field_metadata_entity_1.FieldMetadataType.DATE_TIME, { factory: this.basicColumnActionFactory }],
            [field_metadata_entity_1.FieldMetadataType.RATING, { factory: this.enumColumnActionFactory }],
            [field_metadata_entity_1.FieldMetadataType.SELECT, { factory: this.enumColumnActionFactory }],
            [
                field_metadata_entity_1.FieldMetadataType.MULTI_SELECT,
                { factory: this.enumColumnActionFactory },
            ],
        ]);
    }
    createColumnActions(action, fieldMetadataOrCurrentFieldMetadata, undefinedOrAlteredFieldMetadata) {
        const currentFieldMetadata = action === workspace_migration_entity_1.WorkspaceMigrationColumnActionType.ALTER
            ? fieldMetadataOrCurrentFieldMetadata
            : undefined;
        const alteredFieldMetadata = action === workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE
            ? fieldMetadataOrCurrentFieldMetadata
            : undefinedOrAlteredFieldMetadata;
        if (!alteredFieldMetadata) {
            this.logger.error(`No field metadata provided for action ${action}`, undefinedOrAlteredFieldMetadata);
            throw new Error(`No field metadata provided for action ${action}`);
        }
        if ((0, is_composite_field_metadata_type_util_1.isCompositeFieldMetadataType)(alteredFieldMetadata.type)) {
            const fieldMetadataSplitterFunction = composite_types_1.compositeDefinitions.get(alteredFieldMetadata.type);
            if (!fieldMetadataSplitterFunction) {
                this.logger.error(`No composite definition found for type ${alteredFieldMetadata.type}`, {
                    alteredFieldMetadata,
                });
                throw new Error(`No composite definition found for type ${alteredFieldMetadata.type}`);
            }
            const fieldMetadataCollection = fieldMetadataSplitterFunction(alteredFieldMetadata);
            return fieldMetadataCollection.map((fieldMetadata) => this.createColumnAction(action, fieldMetadata, fieldMetadata));
        }
        const columnAction = this.createColumnAction(action, currentFieldMetadata, alteredFieldMetadata);
        return [columnAction];
    }
    createColumnAction(action, currentFieldMetadata, alteredFieldMetadata) {
        var _a;
        const { factory, options } = (_a = this.factoriesMap.get(alteredFieldMetadata.type)) !== null && _a !== void 0 ? _a : {};
        if (!factory) {
            this.logger.error(`No factory found for type ${alteredFieldMetadata.type}`, {
                alteredFieldMetadata,
            });
            throw new Error(`No factory found for type ${alteredFieldMetadata.type}`);
        }
        return factory.create(action, currentFieldMetadata, alteredFieldMetadata, options);
    }
};
exports.WorkspaceMigrationFactory = WorkspaceMigrationFactory;
exports.WorkspaceMigrationFactory = WorkspaceMigrationFactory = WorkspaceMigrationFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [basic_column_action_factory_1.BasicColumnActionFactory,
        enum_column_action_factory_1.EnumColumnActionFactory])
], WorkspaceMigrationFactory);
//# sourceMappingURL=workspace-migration.factory.js.map