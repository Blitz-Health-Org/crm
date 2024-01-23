"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeMapperService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const input_1 = require("../graphql-types/input");
const enum_1 = require("../graphql-types/enum");
const scalars_1 = require("../graphql-types/scalars");
let TypeMapperService = class TypeMapperService {
    mapToScalarType(fieldMetadataType, dateScalarMode = 'isoDate', numberScalarMode = 'float') {
        const dateScalar = dateScalarMode === 'timestamp' ? graphql_1.GraphQLTimestamp : graphql_1.GraphQLISODateTime;
        const numberScalar = numberScalarMode === 'float' ? graphql_2.GraphQLFloat : graphql_2.GraphQLInt;
        const typeScalarMapping = new Map([
            [field_metadata_entity_1.FieldMetadataType.UUID, graphql_2.GraphQLID],
            [field_metadata_entity_1.FieldMetadataType.TEXT, graphql_2.GraphQLString],
            [field_metadata_entity_1.FieldMetadataType.PHONE, graphql_2.GraphQLString],
            [field_metadata_entity_1.FieldMetadataType.EMAIL, graphql_2.GraphQLString],
            [field_metadata_entity_1.FieldMetadataType.DATE_TIME, dateScalar],
            [field_metadata_entity_1.FieldMetadataType.BOOLEAN, graphql_2.GraphQLBoolean],
            [field_metadata_entity_1.FieldMetadataType.NUMBER, numberScalar],
            [field_metadata_entity_1.FieldMetadataType.NUMERIC, scalars_1.BigFloatScalarType],
            [field_metadata_entity_1.FieldMetadataType.PROBABILITY, graphql_2.GraphQLFloat],
            [field_metadata_entity_1.FieldMetadataType.RELATION, graphql_2.GraphQLID],
        ]);
        return typeScalarMapping.get(fieldMetadataType);
    }
    mapToFilterType(fieldMetadataType, dateScalarMode = 'isoDate', numberScalarMode = 'float') {
        const dateFilter = dateScalarMode === 'timestamp' ? input_1.DatetimeFilterType : input_1.DateFilterType;
        const numberScalar = numberScalarMode === 'float' ? input_1.FloatFilterType : input_1.IntFilterType;
        const typeFilterMapping = new Map([
            [field_metadata_entity_1.FieldMetadataType.UUID, input_1.UUIDFilterType],
            [field_metadata_entity_1.FieldMetadataType.TEXT, input_1.StringFilterType],
            [field_metadata_entity_1.FieldMetadataType.PHONE, input_1.StringFilterType],
            [field_metadata_entity_1.FieldMetadataType.EMAIL, input_1.StringFilterType],
            [field_metadata_entity_1.FieldMetadataType.DATE_TIME, dateFilter],
            [field_metadata_entity_1.FieldMetadataType.BOOLEAN, input_1.BooleanFilterType],
            [field_metadata_entity_1.FieldMetadataType.NUMBER, numberScalar],
            [field_metadata_entity_1.FieldMetadataType.NUMERIC, input_1.BigFloatFilterType],
            [field_metadata_entity_1.FieldMetadataType.PROBABILITY, input_1.FloatFilterType],
            [field_metadata_entity_1.FieldMetadataType.RELATION, input_1.UUIDFilterType],
        ]);
        return typeFilterMapping.get(fieldMetadataType);
    }
    mapToOrderByType(fieldMetadataType) {
        const typeOrderByMapping = new Map([
            [field_metadata_entity_1.FieldMetadataType.UUID, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.TEXT, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.PHONE, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.EMAIL, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.DATE_TIME, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.BOOLEAN, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.NUMBER, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.NUMERIC, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.PROBABILITY, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.RATING, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.SELECT, enum_1.OrderByDirectionType],
            [field_metadata_entity_1.FieldMetadataType.MULTI_SELECT, enum_1.OrderByDirectionType],
        ]);
        return typeOrderByMapping.get(fieldMetadataType);
    }
    mapToGqlType(typeRef, options) {
        var _a, _b;
        let graphqlType = typeRef;
        if (options.isArray) {
            graphqlType = this.mapToGqlList(graphqlType, (_a = options.arrayDepth) !== null && _a !== void 0 ? _a : 1, (_b = options.nullable) !== null && _b !== void 0 ? _b : false);
        }
        if (!options.nullable && !options.defaultValue) {
            graphqlType = new graphql_2.GraphQLNonNull(graphqlType);
        }
        return graphqlType;
    }
    mapToGqlList(targetType, depth, nullable) {
        const targetTypeNonNull = nullable
            ? targetType
            : new graphql_2.GraphQLNonNull(targetType);
        if (depth === 0) {
            return targetType;
        }
        return this.mapToGqlList(new graphql_2.GraphQLList(targetTypeNonNull), depth - 1, nullable);
    }
};
exports.TypeMapperService = TypeMapperService;
exports.TypeMapperService = TypeMapperService = __decorate([
    (0, common_1.Injectable)()
], TypeMapperService);
//# sourceMappingURL=type-mapper.service.js.map