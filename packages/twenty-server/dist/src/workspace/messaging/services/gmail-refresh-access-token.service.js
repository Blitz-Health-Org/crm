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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailRefreshAccessTokenService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const environment_service_1 = require("../../../integrations/environment/environment.service");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
let GmailRefreshAccessTokenService = class GmailRefreshAccessTokenService {
    constructor(environmentService, dataSourceService, typeORMService) {
        this.environmentService = environmentService;
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
    }
    async refreshAndSaveAccessToken(workspaceId, connectedAccountId) {
        var _a;
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        if (!workspaceDataSource) {
            throw new Error('No workspace data source found');
        }
        const connectedAccounts = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."connectedAccount" WHERE "provider" = 'gmail' AND "id" = $1`, [connectedAccountId]));
        if (!connectedAccounts || connectedAccounts.length === 0) {
            throw new Error('No connected account found');
        }
        const refreshToken = (_a = connectedAccounts[0]) === null || _a === void 0 ? void 0 : _a.refreshToken;
        if (!refreshToken) {
            throw new Error('No refresh token found');
        }
        const accessToken = await this.refreshAccessToken(refreshToken);
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`UPDATE ${dataSourceMetadata.schema}."connectedAccount" SET "accessToken" = $1 WHERE "id" = $2`, [accessToken, connectedAccounts[0].id]));
    }
    async refreshAccessToken(refreshToken) {
        const response = await axios_1.default.post('https://oauth2.googleapis.com/token', {
            client_id: this.environmentService.getAuthGoogleClientId(),
            client_secret: this.environmentService.getAuthGoogleClientSecret(),
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data.access_token;
    }
};
exports.GmailRefreshAccessTokenService = GmailRefreshAccessTokenService;
exports.GmailRefreshAccessTokenService = GmailRefreshAccessTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService])
], GmailRefreshAccessTokenService);
//# sourceMappingURL=gmail-refresh-access-token.service.js.map