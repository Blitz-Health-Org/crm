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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeUpdateOneObject = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const field_metadata_entity_1 = require("../../field-metadata/field-metadata.entity");
const object_metadata_service_1 = require("../object-metadata.service");
let BeforeUpdateOneObject = class BeforeUpdateOneObject {
    constructor(objectMetadataService, fieldMetadataRepository) {
        this.objectMetadataService = objectMetadataService;
        this.fieldMetadataRepository = fieldMetadataRepository;
    }
    async run(instance, context) {
        var _a, _b, _c;
        const workspaceId = (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.workspace) === null || _c === void 0 ? void 0 : _c.id;
        if (!workspaceId) {
            throw new common_1.UnauthorizedException();
        }
        const objectMetadata = await this.objectMetadataService.findOneWithinWorkspace(workspaceId, {
            where: {
                id: instance.id.toString(),
            },
        });
        if (!objectMetadata) {
            throw new common_1.BadRequestException('Object does not exist');
        }
        if (!objectMetadata.isCustom) {
            if (Object.keys(instance.update).length === 1 &&
                instance.update.hasOwnProperty('isActive') &&
                instance.update.isActive !== undefined) {
                return {
                    id: instance.id,
                    update: {
                        isActive: instance.update.isActive,
                    },
                };
            }
            throw new common_1.BadRequestException('Only isActive field can be updated for standard objects');
        }
        if (instance.update.labelIdentifierFieldMetadataId ||
            instance.update.imageIdentifierFieldMetadataId) {
            const fields = await this.fieldMetadataRepository.findBy({
                workspaceId: (0, typeorm_2.Equal)(workspaceId),
                objectMetadataId: (0, typeorm_2.Equal)(instance.id.toString()),
                id: (0, typeorm_2.In)([
                    instance.update.labelIdentifierFieldMetadataId,
                    instance.update.imageIdentifierFieldMetadataId,
                ].filter((id) => id !== null)),
            });
            const fieldIds = fields.map((field) => field.id);
            if (instance.update.labelIdentifierFieldMetadataId &&
                !fieldIds.includes(instance.update.labelIdentifierFieldMetadataId)) {
                throw new common_1.BadRequestException('This label identifier does not exist');
            }
            if (instance.update.imageIdentifierFieldMetadataId &&
                !fieldIds.includes(instance.update.imageIdentifierFieldMetadataId)) {
                throw new common_1.BadRequestException('This image identifier does not exist');
            }
        }
        this.checkIfFieldIsEditable(instance.update, objectMetadata);
        return instance;
    }
    checkIfFieldIsEditable(update, objectMetadata) {
        if (update.nameSingular &&
            update.nameSingular !== objectMetadata.nameSingular) {
            throw new common_1.BadRequestException("Object's nameSingular can't be updated. Please create a new object instead");
        }
        if (update.labelSingular &&
            update.labelSingular !== objectMetadata.labelSingular) {
            throw new common_1.BadRequestException("Object's labelSingular can't be updated. Please create a new object instead");
        }
        if (update.namePlural && update.namePlural !== objectMetadata.namePlural) {
            throw new common_1.BadRequestException("Object's namePlural can't be updated. Please create a new object instead");
        }
        if (update.labelPlural &&
            update.labelPlural !== objectMetadata.labelPlural) {
            throw new common_1.BadRequestException("Object's labelPlural can't be updated. Please create a new object instead");
        }
    }
};
exports.BeforeUpdateOneObject = BeforeUpdateOneObject;
exports.BeforeUpdateOneObject = BeforeUpdateOneObject = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(field_metadata_entity_1.FieldMetadataEntity, 'metadata')),
    __metadata("design:paramtypes", [object_metadata_service_1.ObjectMetadataService,
        typeorm_2.Repository])
], BeforeUpdateOneObject);
//# sourceMappingURL=before-update-one-object.hook.js.map