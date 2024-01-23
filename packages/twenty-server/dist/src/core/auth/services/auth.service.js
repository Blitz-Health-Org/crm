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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const file_type_1 = __importDefault(require("file-type"));
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const file_folder_interface_1 = require("../../file/interfaces/file-folder.interface");
const assert_1 = require("../../../utils/assert");
const auth_util_1 = require("../auth.util");
const user_entity_1 = require("../../user/user.entity");
const workspace_entity_1 = require("../../workspace/workspace.entity");
const user_service_1 = require("../../user/services/user.service");
const workspace_manager_service_1 = require("../../../workspace/workspace-manager/workspace-manager.service");
const image_1 = require("../../../utils/image");
const file_upload_service_1 = require("../../file/services/file-upload.service");
const environment_service_1 = require("../../../integrations/environment/environment.service");
const token_service_1 = require("./token.service");
let AuthService = class AuthService {
    constructor(tokenService, userService, workspaceManagerService, fileUploadService, workspaceRepository, userRepository, httpService, environmentService) {
        this.tokenService = tokenService;
        this.userService = userService;
        this.workspaceManagerService = workspaceManagerService;
        this.fileUploadService = fileUploadService;
        this.workspaceRepository = workspaceRepository;
        this.userRepository = userRepository;
        this.httpService = httpService;
        this.environmentService = environmentService;
    }
    async challenge(challengeInput) {
        const user = await this.userRepository.findOneBy({
            email: challengeInput.email,
        });
        (0, assert_1.assert)(user, "This user doesn't exist", common_1.NotFoundException);
        (0, assert_1.assert)(user.passwordHash, 'Incorrect login method', common_1.ForbiddenException);
        const isValid = await (0, auth_util_1.compareHash)(challengeInput.password, user.passwordHash);
        (0, assert_1.assert)(isValid, 'Wrong password', common_1.ForbiddenException);
        return user;
    }
    async signUp({ email, password, workspaceInviteHash, firstName, lastName, picture, }) {
        if (!firstName)
            firstName = '';
        if (!lastName)
            lastName = '';
        const existingUser = await this.userRepository.findOneBy({
            email: email,
        });
        (0, assert_1.assert)(!existingUser, 'This user already exists', common_1.ForbiddenException);
        if (password) {
            const isPasswordValid = auth_util_1.PASSWORD_REGEX.test(password);
            (0, assert_1.assert)(isPasswordValid, 'Password too weak', common_1.BadRequestException);
        }
        const passwordHash = password ? await (0, auth_util_1.hashPassword)(password) : undefined;
        let workspace;
        if (workspaceInviteHash) {
            workspace = await this.workspaceRepository.findOneBy({
                inviteHash: workspaceInviteHash,
            });
            (0, assert_1.assert)(workspace, 'This workspace inviteHash is invalid', common_1.ForbiddenException);
        }
        else {
            (0, assert_1.assert)(!this.environmentService.isSignUpDisabled(), 'Sign up is disabled', common_1.ForbiddenException);
            const workspaceToCreate = this.workspaceRepository.create({
                displayName: '',
                domainName: '',
                inviteHash: (0, uuid_1.v4)(),
                subscriptionStatus: 'incomplete',
            });
            workspace = await this.workspaceRepository.save(workspaceToCreate);
            await this.workspaceManagerService.init(workspace.id);
        }
        const userToCreate = this.userRepository.create({
            email: email,
            firstName: firstName,
            lastName: lastName,
            canImpersonate: false,
            passwordHash,
            defaultWorkspace: workspace,
        });
        const user = await this.userRepository.save(userToCreate);
        let imagePath = undefined;
        if (picture) {
            const buffer = await (0, image_1.getImageBufferFromUrl)(picture, this.httpService.axiosRef);
            const type = await file_type_1.default.fromBuffer(buffer);
            const { paths } = await this.fileUploadService.uploadImage({
                file: buffer,
                filename: `${(0, uuid_1.v4)()}.${type === null || type === void 0 ? void 0 : type.ext}`,
                mimeType: type === null || type === void 0 ? void 0 : type.mime,
                fileFolder: file_folder_interface_1.FileFolder.ProfilePicture,
            });
            imagePath = paths[0];
        }
        await this.userService.createWorkspaceMember(user, imagePath);
        return user;
    }
    async verify(email) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
            relations: ['defaultWorkspace'],
        });
        (0, assert_1.assert)(user, "This user doesn't exist", common_1.NotFoundException);
        (0, assert_1.assert)(user.defaultWorkspace, 'User has no default workspace', common_1.NotFoundException);
        user.passwordHash = '';
        user.workspaceMember = await this.userService.loadWorkspaceMember(user);
        const accessToken = await this.tokenService.generateAccessToken(user.id);
        const refreshToken = await this.tokenService.generateRefreshToken(user.id);
        return {
            user,
            tokens: {
                accessToken,
                refreshToken,
            },
        };
    }
    async checkUserExists(email) {
        const user = await this.userRepository.findOneBy({
            email,
        });
        return { exists: !!user };
    }
    async checkWorkspaceInviteHashIsValid(inviteHash) {
        const workspace = await this.workspaceRepository.findOneBy({
            inviteHash,
        });
        return { isValid: !!workspace };
    }
    async impersonate(userId) {
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
            relations: ['defaultWorkspace'],
        });
        (0, assert_1.assert)(user, "This user doesn't exist", common_1.NotFoundException);
        if (!user.defaultWorkspace.allowImpersonation) {
            throw new common_1.ForbiddenException('Impersonation not allowed');
        }
        const accessToken = await this.tokenService.generateAccessToken(user.id);
        const refreshToken = await this.tokenService.generateRefreshToken(user.id);
        return {
            user,
            tokens: {
                accessToken,
                refreshToken,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, typeorm_1.InjectRepository)(workspace_entity_1.Workspace, 'core')),
    __param(5, (0, typeorm_1.InjectRepository)(user_entity_1.User, 'core')),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        user_service_1.UserService,
        workspace_manager_service_1.WorkspaceManagerService,
        file_upload_service_1.FileUploadService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        axios_1.HttpService,
        environment_service_1.EnvironmentService])
], AuthService);
//# sourceMappingURL=auth.service.js.map