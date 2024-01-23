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
exports.ApiRestService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const environment_service_1 = require("../../integrations/environment/environment.service");
const api_rest_query_builder_factory_1 = require("./api-rest-query-builder/api-rest-query-builder.factory");
const token_service_1 = require("../auth/services/token.service");
let ApiRestService = class ApiRestService {
    constructor(tokenService, environmentService, apiRestQueryBuilderFactory, httpService) {
        this.tokenService = tokenService;
        this.environmentService = environmentService;
        this.apiRestQueryBuilderFactory = apiRestQueryBuilderFactory;
        this.httpService = httpService;
    }
    async callGraphql(request, data) {
        const baseUrl = this.environmentService.getServerUrl() ||
            `${request.protocol}://${request.get('host')}`;
        try {
            return await this.httpService.axiosRef.post(`${baseUrl}/graphql`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: request.headers.authorization,
                },
            });
        }
        catch (err) {
            return {
                data: {
                    error: `${err}. Please check your query.`,
                    status: err.response.status,
                },
            };
        }
    }
    async get(request) {
        try {
            const data = await this.apiRestQueryBuilderFactory.get(request);
            return await this.callGraphql(request, data);
        }
        catch (err) {
            return { data: { error: err, status: err.status } };
        }
    }
    async delete(request) {
        try {
            const data = await this.apiRestQueryBuilderFactory.delete(request);
            return await this.callGraphql(request, data);
        }
        catch (err) {
            return { data: { error: err, status: err.status } };
        }
    }
    async create(request) {
        try {
            const data = await this.apiRestQueryBuilderFactory.create(request);
            return await this.callGraphql(request, data);
        }
        catch (err) {
            return { data: { error: err, status: err.status } };
        }
    }
    async update(request) {
        try {
            const data = await this.apiRestQueryBuilderFactory.update(request);
            return await this.callGraphql(request, data);
        }
        catch (err) {
            return { data: { error: err, status: err.status } };
        }
    }
};
exports.ApiRestService = ApiRestService;
exports.ApiRestService = ApiRestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        environment_service_1.EnvironmentService,
        api_rest_query_builder_factory_1.ApiRestQueryBuilderFactory,
        axios_1.HttpService])
], ApiRestService);
//# sourceMappingURL=api-rest.service.js.map