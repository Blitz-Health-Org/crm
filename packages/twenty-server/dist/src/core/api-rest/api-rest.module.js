"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRestModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const api_rest_controller_1 = require("./api-rest.controller");
const api_rest_service_1 = require("./api-rest.service");
const api_rest_query_builder_module_1 = require("./api-rest-query-builder/api-rest-query-builder.module");
const auth_module_1 = require("../auth/auth.module");
let ApiRestModule = class ApiRestModule {
};
exports.ApiRestModule = ApiRestModule;
exports.ApiRestModule = ApiRestModule = __decorate([
    (0, common_1.Module)({
        imports: [api_rest_query_builder_module_1.ApiRestQueryBuilderModule, auth_module_1.AuthModule, axios_1.HttpModule],
        controllers: [api_rest_controller_1.ApiRestController],
        providers: [api_rest_service_1.ApiRestService],
    })
], ApiRestModule);
//# sourceMappingURL=api-rest.module.js.map