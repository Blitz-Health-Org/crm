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
exports.BeforeDeleteOneField = void 0;
const common_1 = require("@nestjs/common");
const field_metadata_entity_1 = require("../field-metadata.entity");
const field_metadata_service_1 = require("../field-metadata.service");
let BeforeDeleteOneField = class BeforeDeleteOneField {
    constructor(fieldMetadataService) {
        this.fieldMetadataService = fieldMetadataService;
    }
    async run(instance, context) {
        var _a, _b, _c;
        const workspaceId = (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.workspace) === null || _c === void 0 ? void 0 : _c.id;
        if (!workspaceId) {
            throw new common_1.UnauthorizedException();
        }
        const fieldMetadata = await this.fieldMetadataService.findOneWithinWorkspace(workspaceId, {
            where: {
                id: instance.id.toString(),
            },
        });
        if (!fieldMetadata) {
            throw new common_1.BadRequestException('Field does not exist');
        }
        if (!fieldMetadata.isCustom) {
            throw new common_1.BadRequestException("Standard Fields can't be deleted");
        }
        if (fieldMetadata.isActive) {
            throw new common_1.BadRequestException("Active fields can't be deleted");
        }
        if (fieldMetadata.type === field_metadata_entity_1.FieldMetadataType.RELATION) {
            throw new common_1.BadRequestException("Relation fields can't be deleted, you need to delete the RelationMetadata instead");
        }
        return instance;
    }
};
exports.BeforeDeleteOneField = BeforeDeleteOneField;
exports.BeforeDeleteOneField = BeforeDeleteOneField = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [field_metadata_service_1.FieldMetadataService])
], BeforeDeleteOneField);
//# sourceMappingURL=before-delete-one-field.hook.js.map