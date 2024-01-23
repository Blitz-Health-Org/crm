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
exports.JwtAuthStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_jwt_1 = require("passport-jwt");
const typeorm_2 = require("typeorm");
const assert_1 = require("../../../utils/assert");
const environment_service_1 = require("../../../integrations/environment/environment.service");
const workspace_entity_1 = require("../../workspace/workspace.entity");
const user_entity_1 = require("../../user/user.entity");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
let JwtAuthStrategy = class JwtAuthStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(environmentService, typeORMService, dataSourceService, workspaceRepository, userRepository) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: environmentService.getAccessTokenSecret(),
        });
        this.environmentService = environmentService;
        this.typeORMService = typeORMService;
        this.dataSourceService = dataSourceService;
        this.workspaceRepository = workspaceRepository;
        this.userRepository = userRepository;
    }
    async validate(payload) {
        var _a;
        const workspace = await this.workspaceRepository.findOneBy({
            id: (_a = payload.workspaceId) !== null && _a !== void 0 ? _a : payload.sub,
        });
        if (!workspace) {
            throw new common_1.UnauthorizedException();
        }
        if (payload.jti) {
            const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspace.id);
            const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
            const apiKey = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."apiKey" WHERE id = '${payload.jti}'`));
            (0, assert_1.assert)(apiKey.length === 1 && !(apiKey === null || apiKey === void 0 ? void 0 : apiKey[0].revokedAt), 'This API Key is revoked', common_1.ForbiddenException);
        }
        let user;
        if (payload.workspaceId) {
            user = await this.userRepository.findOne({
                where: { id: payload.sub },
                relations: ['defaultWorkspace'],
            });
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
        }
        return { user, workspace };
    }
};
exports.JwtAuthStrategy = JwtAuthStrategy;
exports.JwtAuthStrategy = JwtAuthStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(workspace_entity_1.Workspace, 'core')),
    __param(4, (0, typeorm_1.InjectRepository)(user_entity_1.User, 'core')),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        typeorm_service_1.TypeORMService,
        data_source_service_1.DataSourceService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], JwtAuthStrategy);
//# sourceMappingURL=jwt.auth.strategy.js.map