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
exports.BeforeDeleteOneRelation = void 0;
const common_1 = require("@nestjs/common");
const relation_metadata_service_1 = require("../relation-metadata.service");
let BeforeDeleteOneRelation = class BeforeDeleteOneRelation {
    constructor(relationMetadataService) {
        this.relationMetadataService = relationMetadataService;
    }
    async run(instance, context) {
        var _a, _b, _c;
        const workspaceId = (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.workspace) === null || _c === void 0 ? void 0 : _c.id;
        if (!workspaceId) {
            throw new common_1.UnauthorizedException();
        }
        const relationMetadata = await this.relationMetadataService.findOneWithinWorkspace(workspaceId, {
            where: {
                id: instance.id.toString(),
            },
        });
        if (!relationMetadata) {
            throw new common_1.BadRequestException('Relation does not exist');
        }
        if (!relationMetadata.toFieldMetadata.isCustom ||
            !relationMetadata.fromFieldMetadata.isCustom) {
            throw new common_1.BadRequestException("Standard Relations can't be deleted");
        }
        if (relationMetadata.toFieldMetadata.isActive ||
            relationMetadata.fromFieldMetadata.isActive) {
            throw new common_1.BadRequestException("Active relations can't be deleted");
        }
        return instance;
    }
};
exports.BeforeDeleteOneRelation = BeforeDeleteOneRelation;
exports.BeforeDeleteOneRelation = BeforeDeleteOneRelation = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [relation_metadata_service_1.RelationMetadataService])
], BeforeDeleteOneRelation);
//# sourceMappingURL=before-delete-one-field.hook.js.map