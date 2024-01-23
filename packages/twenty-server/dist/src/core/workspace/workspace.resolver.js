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
exports.WorkspaceResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const graphql_upload_1 = require("graphql-upload");
const file_folder_interface_1 = require("../file/interfaces/file-folder.interface");
const stream_to_buffer_1 = require("../../utils/stream-to-buffer");
const file_upload_service_1 = require("../file/services/file-upload.service");
const auth_workspace_decorator_1 = require("../../decorators/auth-workspace.decorator");
const assert_1 = require("../../utils/assert");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const update_workspace_input_1 = require("./dtos/update-workspace-input");
const environment_service_1 = require("../../integrations/environment/environment.service");
const workspace_entity_1 = require("./workspace.entity");
const workspace_service_1 = require("./services/workspace.service");
let WorkspaceResolver = class WorkspaceResolver {
    constructor(workspaceService, fileUploadService, environmentService) {
        this.workspaceService = workspaceService;
        this.fileUploadService = fileUploadService;
        this.environmentService = environmentService;
    }
    async currentWorkspace({ id }) {
        const workspace = await this.workspaceService.findById(id);
        (0, assert_1.assert)(workspace, 'User not found');
        return workspace;
    }
    async updateWorkspace(data, workspace) {
        return this.workspaceService.updateOne(workspace.id, data);
    }
    async uploadWorkspaceLogo({ id }, { createReadStream, filename, mimetype }) {
        const stream = createReadStream();
        const buffer = await (0, stream_to_buffer_1.streamToBuffer)(stream);
        const fileFolder = file_folder_interface_1.FileFolder.WorkspaceLogo;
        const { paths } = await this.fileUploadService.uploadImage({
            file: buffer,
            filename,
            mimeType: mimetype,
            fileFolder,
        });
        await this.workspaceService.updateOne(id, {
            logo: paths[0],
        });
        return paths[0];
    }
    async deleteCurrentWorkspace({ id }) {
        const demoWorkspaceIds = this.environmentService.getDemoWorkspaceIds();
        if (demoWorkspaceIds.includes(id)) {
            throw new common_1.ForbiddenException('Demo workspaces cannot be deleted.');
        }
        return this.workspaceService.deleteWorkspace(id);
    }
};
exports.WorkspaceResolver = WorkspaceResolver;
__decorate([
    (0, graphql_1.Query)(() => workspace_entity_1.Workspace),
    __param(0, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_entity_1.Workspace]),
    __metadata("design:returntype", Promise)
], WorkspaceResolver.prototype, "currentWorkspace", null);
__decorate([
    (0, graphql_1.Mutation)(() => workspace_entity_1.Workspace),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_workspace_input_1.UpdateWorkspaceInput,
        workspace_entity_1.Workspace]),
    __metadata("design:returntype", Promise)
], WorkspaceResolver.prototype, "updateWorkspace", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __param(1, (0, graphql_1.Args)({ name: 'file', type: () => graphql_upload_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_entity_1.Workspace, Object]),
    __metadata("design:returntype", Promise)
], WorkspaceResolver.prototype, "uploadWorkspaceLogo", null);
__decorate([
    (0, graphql_1.Mutation)(() => workspace_entity_1.Workspace),
    __param(0, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_entity_1.Workspace]),
    __metadata("design:returntype", Promise)
], WorkspaceResolver.prototype, "deleteCurrentWorkspace", null);
exports.WorkspaceResolver = WorkspaceResolver = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Resolver)(() => workspace_entity_1.Workspace),
    __metadata("design:paramtypes", [workspace_service_1.WorkspaceService,
        file_upload_service_1.FileUploadService,
        environment_service_1.EnvironmentService])
], WorkspaceResolver);
//# sourceMappingURL=workspace.resolver.js.map