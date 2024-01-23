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
exports.ApiRestController = void 0;
const common_1 = require("@nestjs/common");
const api_rest_service_1 = require("./api-rest.service");
const api_rest_controller_utils_1 = require("./api-rest.controller.utils");
let ApiRestController = class ApiRestController {
    constructor(apiRestService) {
        this.apiRestService = apiRestService;
    }
    async handleApiGet(request, res) {
        (0, api_rest_controller_utils_1.handleResult)(res, await this.apiRestService.get(request));
    }
    async handleApiDelete(request, res) {
        (0, api_rest_controller_utils_1.handleResult)(res, await this.apiRestService.delete(request));
    }
    async handleApiPost(request, res) {
        (0, api_rest_controller_utils_1.handleResult)(res, await this.apiRestService.create(request));
    }
    async handleApiPut(request, res) {
        (0, api_rest_controller_utils_1.handleResult)(res, await this.apiRestService.update(request));
    }
};
exports.ApiRestController = ApiRestController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiRestController.prototype, "handleApiGet", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiRestController.prototype, "handleApiDelete", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiRestController.prototype, "handleApiPost", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiRestController.prototype, "handleApiPut", null);
exports.ApiRestController = ApiRestController = __decorate([
    (0, common_1.Controller)('rest/*'),
    __metadata("design:paramtypes", [api_rest_service_1.ApiRestService])
], ApiRestController);
//# sourceMappingURL=api-rest.controller.js.map