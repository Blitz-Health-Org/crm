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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FieldsStringFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsStringFactory = void 0;
const common_1 = require("@nestjs/common");
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
const is_relation_field_metadata_type_util_1 = require("../../utils/is-relation-field-metadata-type.util");
const field_alias_factory_1 = require("./field-alias.factory");
const relation_field_alias_factory_1 = require("./relation-field-alias.factory");
let FieldsStringFactory = FieldsStringFactory_1 = class FieldsStringFactory {
    constructor(fieldAliasFactory, relationFieldAliasFactory) {
        this.fieldAliasFactory = fieldAliasFactory;
        this.relationFieldAliasFactory = relationFieldAliasFactory;
        this.logger = new common_1.Logger(FieldsStringFactory_1.name);
    }
    create(info, fieldMetadataCollection, objectMetadataCollection) {
        const selectedFields = (0, graphql_fields_1.default)(info);
        return this.createFieldsStringRecursive(info, selectedFields, fieldMetadataCollection, objectMetadataCollection);
    }
    async createFieldsStringRecursive(info, selectedFields, fieldMetadataCollection, objectMetadataCollection, accumulator = '') {
        const fieldMetadataMap = new Map(fieldMetadataCollection.map((metadata) => [metadata.name, metadata]));
        for (const [fieldKey, fieldValue] of Object.entries(selectedFields)) {
            let fieldAlias;
            if (fieldMetadataMap.has(fieldKey)) {
                const fieldMetadata = fieldMetadataMap.get(fieldKey);
                if ((0, is_relation_field_metadata_type_util_1.isRelationFieldMetadataType)(fieldMetadata.type)) {
                    const alias = await this.relationFieldAliasFactory.create(fieldKey, fieldValue, fieldMetadata, objectMetadataCollection, info);
                    fieldAlias = alias;
                }
                else {
                    const alias = this.fieldAliasFactory.create(fieldKey, fieldMetadata);
                    fieldAlias = alias;
                }
            }
            fieldAlias !== null && fieldAlias !== void 0 ? fieldAlias : (fieldAlias = fieldKey);
            if (!fieldMetadataMap.has(fieldKey) &&
                fieldValue &&
                typeof fieldValue === 'object' &&
                !(0, lodash_isempty_1.default)(fieldValue)) {
                accumulator += `${fieldKey} {\n`;
                accumulator = await this.createFieldsStringRecursive(info, fieldValue, fieldMetadataCollection, objectMetadataCollection, accumulator);
                accumulator += `}\n`;
            }
            else {
                accumulator += `${fieldAlias}\n`;
            }
        }
        return accumulator;
    }
};
exports.FieldsStringFactory = FieldsStringFactory;
exports.FieldsStringFactory = FieldsStringFactory = FieldsStringFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [field_alias_factory_1.FieldAliasFacotry,
        relation_field_alias_factory_1.RelationFieldAliasFactory])
], FieldsStringFactory);
//# sourceMappingURL=fields-string.factory.js.map