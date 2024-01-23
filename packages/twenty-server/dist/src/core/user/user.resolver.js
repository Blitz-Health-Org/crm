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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const crypto_1 = __importDefault(require("crypto"));
const graphql_upload_1 = require("graphql-upload");
const support_interface_1 = require("../../integrations/environment/interfaces/support.interface");
const file_folder_interface_1 = require("../file/interfaces/file-folder.interface");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const environment_service_1 = require("../../integrations/environment/environment.service");
const stream_to_buffer_1 = require("../../utils/stream-to-buffer");
const file_upload_service_1 = require("../file/services/file-upload.service");
const assert_1 = require("../../utils/assert");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const user_entity_1 = require("./user.entity");
const workspace_member_dto_1 = require("./dtos/workspace-member.dto");
const user_service_1 = require("./services/user.service");
const getHMACKey = (email, key) => {
    if (!email || !key)
        return null;
    const hmac = crypto_1.default.createHmac('sha256', key);
    return hmac.update(email).digest('hex');
};
let UserResolver = class UserResolver {
    constructor(userService, environmentService, fileUploadService) {
        this.userService = userService;
        this.environmentService = environmentService;
        this.fileUploadService = fileUploadService;
    }
    async currentUser({ id }) {
        const user = await this.userService.findById(id, {
            relations: [{ name: 'defaultWorkspace', query: {} }],
        });
        (0, assert_1.assert)(user, 'User not found');
        return user;
    }
    async workspaceMember(user) {
        return this.userService.loadWorkspaceMember(user);
    }
    supportUserHash(parent) {
        if (this.environmentService.getSupportDriver() !== support_interface_1.SupportDriver.Front) {
            return null;
        }
        const key = this.environmentService.getSupportFrontHMACKey();
        return getHMACKey(parent.email, key);
    }
    async uploadProfilePicture({ id }, { createReadStream, filename, mimetype }) {
        if (!id) {
            throw new Error('User not found');
        }
        const stream = createReadStream();
        const buffer = await (0, stream_to_buffer_1.streamToBuffer)(stream);
        const fileFolder = file_folder_interface_1.FileFolder.ProfilePicture;
        const { paths } = await this.fileUploadService.uploadImage({
            file: buffer,
            filename,
            mimeType: mimetype,
            fileFolder,
        });
        return paths[0];
    }
    async deleteUser({ id: userId, defaultWorkspace }) {
        const demoWorkspaceIds = this.environmentService.getDemoWorkspaceIds();
        const currentUserWorkspaceId = defaultWorkspace.id;
        if (demoWorkspaceIds.includes(currentUserWorkspaceId)) {
            throw new common_1.ForbiddenException('Deletion of users with a default demo workspace is not allowed.');
        }
        return this.userService.deleteUser(userId);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "currentUser", null);
__decorate([
    (0, graphql_1.ResolveField)(() => workspace_member_dto_1.WorkspaceMember, {
        nullable: false,
    }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "workspaceMember", null);
__decorate([
    (0, graphql_1.ResolveField)(() => String, {
        nullable: true,
    }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Object)
], UserResolver.prototype, "supportUserHash", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)({ name: 'file', type: () => graphql_upload_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "uploadProfilePicture", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService,
        environment_service_1.EnvironmentService,
        file_upload_service_1.FileUploadService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map