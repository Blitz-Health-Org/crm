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
exports.UserService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const typeorm_2 = require("typeorm");
const assert_1 = require("../../../utils/assert");
const user_entity_1 = require("../user.entity");
const workspace_member_dto_1 = require("../dtos/workspace-member.dto");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
let UserService = class UserService extends nestjs_query_typeorm_1.TypeOrmQueryService {
    constructor(userRepository, dataSourceService, typeORMService) {
        super(userRepository);
        this.userRepository = userRepository;
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
    }
    async loadWorkspaceMember(user) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(user.defaultWorkspace.id);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        const workspaceMembers = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."workspaceMember" WHERE "userId" = '${user.id}'`));
        (0, assert_1.assert)(workspaceMembers.length === 1, 'WorkspaceMember not found');
        const userWorkspaceMember = new workspace_member_dto_1.WorkspaceMember();
        userWorkspaceMember.id = workspaceMembers[0].id;
        userWorkspaceMember.colorScheme = workspaceMembers[0].colorScheme;
        userWorkspaceMember.locale = workspaceMembers[0].locale;
        userWorkspaceMember.avatarUrl = workspaceMembers[0].avatarUrl;
        userWorkspaceMember.name = {
            firstName: workspaceMembers[0].nameFirstName,
            lastName: workspaceMembers[0].nameLastName,
        };
        return userWorkspaceMember;
    }
    async loadWorkspaceMembers(dataSource) {
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSource);
        return await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`
      SELECT * 
      FROM ${dataSource.schema}."workspaceMember" AS s 
      INNER JOIN core.user AS u 
      ON s."userId" = u.id
    `));
    }
    async createWorkspaceMember(user, avatarUrl) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(user.defaultWorkspace.id);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`INSERT INTO ${dataSourceMetadata.schema}."workspaceMember"
      ("nameFirstName", "nameLastName", "colorScheme", "userId", "avatarUrl")
      VALUES ('${user.firstName}', '${user.lastName}', 'Light', '${user.id}', '${avatarUrl !== null && avatarUrl !== void 0 ? avatarUrl : ''}')`));
    }
    async deleteUser(userId) {
        const user = await this.userRepository.findOneBy({
            id: userId,
        });
        (0, assert_1.assert)(user, 'User not found');
        await this.userRepository.delete(user.id);
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User, 'core')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService])
], UserService);
//# sourceMappingURL=user.service.js.map