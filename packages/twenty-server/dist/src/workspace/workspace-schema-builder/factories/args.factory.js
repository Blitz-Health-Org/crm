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
var ArgsFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgsFactory = void 0;
const common_1 = require("@nestjs/common");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const type_mapper_service_1 = require("../services/type-mapper.service");
let ArgsFactory = ArgsFactory_1 = class ArgsFactory {
    constructor(typeDefinitionsStorage, typeMapperService) {
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.typeMapperService = typeMapperService;
        this.logger = new common_1.Logger(ArgsFactory_1.name);
    }
    create({ args, objectMetadataId }, options) {
        const fieldConfigMap = {};
        for (const key in args) {
            if (!args.hasOwnProperty(key)) {
                continue;
            }
            const arg = args[key];
            if (arg.type) {
                const fieldType = this.typeMapperService.mapToScalarType(arg.type, options.dateScalarMode, options.numberScalarMode);
                if (!fieldType) {
                    this.logger.error(`Could not find a GraphQL type for ${arg.type.toString()}`, {
                        arg,
                        options,
                    });
                    throw new Error(`Could not find a GraphQL type for ${arg.type.toString()}`);
                }
                const gqlType = this.typeMapperService.mapToGqlType(fieldType, {
                    defaultValue: arg.defaultValue,
                    nullable: arg.isNullable,
                    isArray: arg.isArray,
                });
                fieldConfigMap[key] = {
                    type: gqlType,
                };
            }
            if (arg.kind) {
                const inputType = this.typeDefinitionsStorage.getInputTypeByKey(objectMetadataId, arg.kind);
                if (!inputType) {
                    this.logger.error(`Could not find a GraphQL input type for ${objectMetadataId}`, {
                        objectMetadataId,
                        options,
                    });
                    throw new Error(`Could not find a GraphQL input type for ${objectMetadataId}`);
                }
                const gqlType = this.typeMapperService.mapToGqlType(inputType, {
                    nullable: arg.isNullable,
                    isArray: arg.isArray,
                });
                fieldConfigMap[key] = {
                    type: gqlType,
                };
            }
        }
        return fieldConfigMap;
    }
};
exports.ArgsFactory = ArgsFactory;
exports.ArgsFactory = ArgsFactory = ArgsFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_definitions_storage_1.TypeDefinitionsStorage,
        type_mapper_service_1.TypeMapperService])
], ArgsFactory);
//# sourceMappingURL=args.factory.js.map