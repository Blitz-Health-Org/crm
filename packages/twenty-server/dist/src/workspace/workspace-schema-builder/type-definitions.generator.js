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
var TypeDefinitionsGenerator_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDefinitionsGenerator = void 0;
const common_1 = require("@nestjs/common");
const custom_table_default_column_util_1 = require("../workspace-migration-runner/utils/custom-table-default-column.util");
const full_name_composite_type_1 = require("../../metadata/field-metadata/composite-types/full-name.composite-type");
const currency_composite_type_1 = require("../../metadata/field-metadata/composite-types/currency.composite-type");
const link_composite_type_1 = require("../../metadata/field-metadata/composite-types/link.composite-type");
const enum_type_definition_factory_1 = require("./factories/enum-type-definition.factory");
const type_definitions_storage_1 = require("./storages/type-definitions.storage");
const object_type_definition_factory_1 = require("./factories/object-type-definition.factory");
const input_type_definition_factory_1 = require("./factories/input-type-definition.factory");
const get_field_metadata_type_util_1 = require("./utils/get-field-metadata-type.util");
const filter_type_definition_factory_1 = require("./factories/filter-type-definition.factory");
const connection_type_definition_factory_1 = require("./factories/connection-type-definition.factory");
const edge_type_definition_factory_1 = require("./factories/edge-type-definition.factory");
const order_by_type_definition_factory_1 = require("./factories/order-by-type-definition.factory");
const extend_object_type_definition_factory_1 = require("./factories/extend-object-type-definition.factory");
const object_contains_relation_field_1 = require("./utils/object-contains-relation-field");
const defaultFields = custom_table_default_column_util_1.customTableDefaultColumns.map((column) => {
    return {
        type: (0, get_field_metadata_type_util_1.getFieldMetadataType)(column.type),
        name: column.name,
        isNullable: true,
    };
});
let TypeDefinitionsGenerator = TypeDefinitionsGenerator_1 = class TypeDefinitionsGenerator {
    constructor(typeDefinitionsStorage, objectTypeDefinitionFactory, enumTypeDefinitionFactory, inputTypeDefinitionFactory, filterTypeDefintionFactory, orderByTypeDefinitionFactory, edgeTypeDefinitionFactory, connectionTypeDefinitionFactory, extendObjectTypeDefinitionFactory) {
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.objectTypeDefinitionFactory = objectTypeDefinitionFactory;
        this.enumTypeDefinitionFactory = enumTypeDefinitionFactory;
        this.inputTypeDefinitionFactory = inputTypeDefinitionFactory;
        this.filterTypeDefintionFactory = filterTypeDefintionFactory;
        this.orderByTypeDefinitionFactory = orderByTypeDefinitionFactory;
        this.edgeTypeDefinitionFactory = edgeTypeDefinitionFactory;
        this.connectionTypeDefinitionFactory = connectionTypeDefinitionFactory;
        this.extendObjectTypeDefinitionFactory = extendObjectTypeDefinitionFactory;
        this.logger = new common_1.Logger(TypeDefinitionsGenerator_1.name);
    }
    generate(objectMetadataCollection, options) {
        this.generateStaticObjectTypeDefs(options);
        this.generateDynamicObjectTypeDefs(objectMetadataCollection, options);
    }
    generateStaticObjectTypeDefs(options) {
        const staticObjectMetadataCollection = [
            currency_composite_type_1.currencyObjectDefinition,
            link_composite_type_1.linkObjectDefinition,
            full_name_composite_type_1.fullNameObjectDefinition,
        ];
        this.logger.log(`Generating staticObjects: [${staticObjectMetadataCollection
            .map((object) => object.nameSingular)
            .join(', ')}]`);
        this.generateEnumTypeDefs(staticObjectMetadataCollection, options);
        this.generateObjectTypeDefs(staticObjectMetadataCollection, options);
        this.generateInputTypeDefs(staticObjectMetadataCollection, options);
    }
    generateDynamicObjectTypeDefs(dynamicObjectMetadataCollection, options) {
        this.logger.log(`Generating dynamicObjects: [${dynamicObjectMetadataCollection
            .map((object) => object.nameSingular)
            .join(', ')}]`);
        this.generateEnumTypeDefs(dynamicObjectMetadataCollection, options);
        this.generateObjectTypeDefs(dynamicObjectMetadataCollection, options);
        this.generatePaginationTypeDefs(dynamicObjectMetadataCollection, options);
        this.generateInputTypeDefs(dynamicObjectMetadataCollection, options);
        this.generateExtendedObjectTypeDefs(dynamicObjectMetadataCollection, options);
    }
    generateObjectTypeDefs(objectMetadataCollection, options) {
        const objectTypeDefs = objectMetadataCollection.map((objectMetadata) => {
            const fields = this.mergeFieldsWithDefaults(objectMetadata.fields);
            const extendedObjectMetadata = Object.assign(Object.assign({}, objectMetadata), { fields });
            return this.objectTypeDefinitionFactory.create(extendedObjectMetadata, object_type_definition_factory_1.ObjectTypeDefinitionKind.Plain, options);
        });
        this.typeDefinitionsStorage.addObjectTypes(objectTypeDefs);
    }
    generatePaginationTypeDefs(objectMetadataCollection, options) {
        const edgeTypeDefs = objectMetadataCollection.map((objectMetadata) => {
            const fields = this.mergeFieldsWithDefaults(objectMetadata.fields);
            const extendedObjectMetadata = Object.assign(Object.assign({}, objectMetadata), { fields });
            return this.edgeTypeDefinitionFactory.create(extendedObjectMetadata, options);
        });
        this.typeDefinitionsStorage.addObjectTypes(edgeTypeDefs);
        const connectionTypeDefs = objectMetadataCollection.map((objectMetadata) => {
            const fields = this.mergeFieldsWithDefaults(objectMetadata.fields);
            const extendedObjectMetadata = Object.assign(Object.assign({}, objectMetadata), { fields });
            return this.connectionTypeDefinitionFactory.create(extendedObjectMetadata, options);
        });
        this.typeDefinitionsStorage.addObjectTypes(connectionTypeDefs);
    }
    generateInputTypeDefs(objectMetadataCollection, options) {
        const inputTypeDefs = objectMetadataCollection
            .map((objectMetadata) => {
            const fields = this.mergeFieldsWithDefaults(objectMetadata.fields);
            const requiredExtendedObjectMetadata = Object.assign(Object.assign({}, objectMetadata), { fields });
            const optionalExtendedObjectMetadata = Object.assign(Object.assign({}, objectMetadata), { fields: fields.map((field) => (Object.assign(Object.assign({}, field), { isNullable: true }))) });
            return [
                this.inputTypeDefinitionFactory.create(requiredExtendedObjectMetadata, input_type_definition_factory_1.InputTypeDefinitionKind.Create, options),
                this.inputTypeDefinitionFactory.create(optionalExtendedObjectMetadata, input_type_definition_factory_1.InputTypeDefinitionKind.Update, options),
                this.filterTypeDefintionFactory.create(optionalExtendedObjectMetadata, options),
                this.orderByTypeDefinitionFactory.create(optionalExtendedObjectMetadata, options),
            ];
        })
            .flat();
        this.typeDefinitionsStorage.addInputTypes(inputTypeDefs);
    }
    generateEnumTypeDefs(objectMetadataCollection, options) {
        const enumTypeDefs = objectMetadataCollection
            .map((objectMetadata) => this.enumTypeDefinitionFactory.create(objectMetadata, options))
            .flat();
        this.typeDefinitionsStorage.addEnumTypes(enumTypeDefs);
    }
    generateExtendedObjectTypeDefs(objectMetadataCollection, options) {
        const objectMetadataCollectionWithCompositeFields = objectMetadataCollection.filter(object_contains_relation_field_1.objectContainsRelationField);
        const objectTypeDefs = objectMetadataCollectionWithCompositeFields.map((objectMetadata) => this.extendObjectTypeDefinitionFactory.create(objectMetadata, options));
        this.typeDefinitionsStorage.addObjectTypes(objectTypeDefs);
    }
    mergeFieldsWithDefaults(fields) {
        const fieldNames = new Set(fields.map((field) => field.name));
        const uniqueDefaultFields = defaultFields.filter((defaultField) => !fieldNames.has(defaultField.name));
        return [...fields, ...uniqueDefaultFields];
    }
};
exports.TypeDefinitionsGenerator = TypeDefinitionsGenerator;
exports.TypeDefinitionsGenerator = TypeDefinitionsGenerator = TypeDefinitionsGenerator_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_definitions_storage_1.TypeDefinitionsStorage,
        object_type_definition_factory_1.ObjectTypeDefinitionFactory,
        enum_type_definition_factory_1.EnumTypeDefinitionFactory,
        input_type_definition_factory_1.InputTypeDefinitionFactory,
        filter_type_definition_factory_1.FilterTypeDefinitionFactory,
        order_by_type_definition_factory_1.OrderByTypeDefinitionFactory,
        edge_type_definition_factory_1.EdgeTypeDefinitionFactory,
        connection_type_definition_factory_1.ConnectionTypeDefinitionFactory,
        extend_object_type_definition_factory_1.ExtendObjectTypeDefinitionFactory])
], TypeDefinitionsGenerator);
//# sourceMappingURL=type-definitions.generator.js.map