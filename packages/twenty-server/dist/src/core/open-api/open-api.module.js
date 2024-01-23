"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiModule = void 0;
const common_1 = require("@nestjs/common");
const open_api_controller_1 = require("./open-api.controller");
const open_api_service_1 = require("./open-api.service");
const auth_module_1 = require("../auth/auth.module");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
let OpenApiModule = class OpenApiModule {
};
exports.OpenApiModule = OpenApiModule;
exports.OpenApiModule = OpenApiModule = __decorate([
    (0, common_1.Module)({
        imports: [object_metadata_module_1.ObjectMetadataModule, auth_module_1.AuthModule],
        controllers: [open_api_controller_1.OpenApiController],
        providers: [open_api_service_1.OpenApiService],
    })
], OpenApiModule);
//# sourceMappingURL=open-api.module.js.map