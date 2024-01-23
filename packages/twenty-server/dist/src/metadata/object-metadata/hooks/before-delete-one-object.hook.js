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
exports.BeforeDeleteOneObject = void 0;
const common_1 = require("@nestjs/common");
const object_metadata_service_1 = require("../object-metadata.service");
let BeforeDeleteOneObject = class BeforeDeleteOneObject {
    constructor(objectMetadataService) {
        this.objectMetadataService = objectMetadataService;
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
            throw new common_1.BadRequestException("Standard Objects can't be deleted");
        }
        if (objectMetadata.isActive) {
            throw new common_1.BadRequestException("Active objects can't be deleted");
        }
        return instance;
    }
};
exports.BeforeDeleteOneObject = BeforeDeleteOneObject;
exports.BeforeDeleteOneObject = BeforeDeleteOneObject = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [object_metadata_service_1.ObjectMetadataService])
], BeforeDeleteOneObject);
//# sourceMappingURL=before-delete-one-object.hook.js.map