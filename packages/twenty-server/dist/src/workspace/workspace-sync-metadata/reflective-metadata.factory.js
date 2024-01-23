"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectiveMetadataFactory = void 0;
const common_1 = require("@nestjs/common");
const assert_1 = __importDefault(require("assert"));
const typed_reflect_1 = require("../../utils/typed-reflect");
const is_gate_and_not_enabled_util_1 = require("./utils/is-gate-and-not-enabled.util");
let ReflectiveMetadataFactory = class ReflectiveMetadataFactory {
    async createObjectMetadata(metadata, workspaceId, defaultDataSourceId, workspaceFeatureFlagsMap) {
        var _a;
        const objectMetadata = typed_reflect_1.TypedReflect.getMetadata('objectMetadata', metadata);
        const fieldMetadata = (_a = typed_reflect_1.TypedReflect.getMetadata('fieldMetadata', metadata)) !== null && _a !== void 0 ? _a : {};
        if (!objectMetadata) {
            throw new Error(`Object metadata decorator not found, can\'t parse ${metadata.name}`);
        }
        if ((0, is_gate_and_not_enabled_util_1.isGatedAndNotEnabled)(objectMetadata, workspaceFeatureFlagsMap)) {
            return undefined;
        }
        const fields = Object.values(fieldMetadata).filter((field) => !(0, is_gate_and_not_enabled_util_1.isGatedAndNotEnabled)(field, workspaceFeatureFlagsMap));
        return Object.assign(Object.assign({}, objectMetadata), { workspaceId, dataSourceId: defaultDataSourceId, fields: fields.map((field) => (Object.assign(Object.assign({}, field), { workspaceId, isSystem: objectMetadata.isSystem || field.isSystem }))) });
    }
    async createObjectMetadataCollection(metadataCollection, workspaceId, dataSourceId, workspaceFeatureFlagsMap) {
        const metadataPromises = metadataCollection.map((metadata) => this.createObjectMetadata(metadata, workspaceId, dataSourceId, workspaceFeatureFlagsMap));
        const resolvedMetadata = await Promise.all(metadataPromises);
        return resolvedMetadata.filter((metadata) => !!metadata);
    }
    createRelationMetadata(metadata, workspaceId, objectMetadataFromDB, workspaceFeatureFlagsMap) {
        const objectMetadata = typed_reflect_1.TypedReflect.getMetadata('objectMetadata', metadata);
        const relationMetadata = typed_reflect_1.TypedReflect.getMetadata('relationMetadata', metadata);
        if (!objectMetadata) {
            throw new Error(`Object metadata decorator not found, can\'t parse ${metadata.name}`);
        }
        if (!relationMetadata ||
            (0, is_gate_and_not_enabled_util_1.isGatedAndNotEnabled)(objectMetadata, workspaceFeatureFlagsMap)) {
            return [];
        }
        return relationMetadata
            .filter((relation) => !(0, is_gate_and_not_enabled_util_1.isGatedAndNotEnabled)(relation, workspaceFeatureFlagsMap))
            .map((relation) => {
            const fromObjectMetadata = objectMetadataFromDB[relation.fromObjectNameSingular];
            (0, assert_1.default)(fromObjectMetadata, `Object ${relation.fromObjectNameSingular} not found in DB 
        for relation FROM defined in class ${objectMetadata.nameSingular}`);
            const toObjectMetadata = objectMetadataFromDB[relation.toObjectNameSingular];
            (0, assert_1.default)(toObjectMetadata, `Object ${relation.toObjectNameSingular} not found in DB
        for relation TO defined in class ${objectMetadata.nameSingular}`);
            const fromFieldMetadata = fromObjectMetadata === null || fromObjectMetadata === void 0 ? void 0 : fromObjectMetadata.fields[relation.fromFieldMetadataName];
            (0, assert_1.default)(fromFieldMetadata, `Field ${relation.fromFieldMetadataName} not found in object ${relation.fromObjectNameSingular}
        for relation FROM defined in class ${objectMetadata.nameSingular}`);
            const toFieldMetadata = toObjectMetadata === null || toObjectMetadata === void 0 ? void 0 : toObjectMetadata.fields[relation.toFieldMetadataName];
            (0, assert_1.default)(toFieldMetadata, `Field ${relation.toFieldMetadataName} not found in object ${relation.toObjectNameSingular}
        for relation TO defined in class ${objectMetadata.nameSingular}`);
            return {
                relationType: relation.type,
                fromObjectMetadataId: fromObjectMetadata === null || fromObjectMetadata === void 0 ? void 0 : fromObjectMetadata.id,
                toObjectMetadataId: toObjectMetadata === null || toObjectMetadata === void 0 ? void 0 : toObjectMetadata.id,
                fromFieldMetadataId: fromFieldMetadata === null || fromFieldMetadata === void 0 ? void 0 : fromFieldMetadata.id,
                toFieldMetadataId: toFieldMetadata === null || toFieldMetadata === void 0 ? void 0 : toFieldMetadata.id,
                workspaceId,
            };
        });
    }
    createRelationMetadataCollection(metadataCollection, workspaceId, objectMetadataFromDB, workspaceFeatureFlagsMap) {
        return metadataCollection.flatMap((metadata) => this.createRelationMetadata(metadata, workspaceId, objectMetadataFromDB, workspaceFeatureFlagsMap));
    }
};
exports.ReflectiveMetadataFactory = ReflectiveMetadataFactory;
exports.ReflectiveMetadataFactory = ReflectiveMetadataFactory = __decorate([
    (0, common_1.Injectable)()
], ReflectiveMetadataFactory);
//# sourceMappingURL=reflective-metadata.factory.js.map