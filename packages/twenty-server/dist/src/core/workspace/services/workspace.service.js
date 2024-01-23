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
exports.WorkspaceService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const assert_1 = __importDefault(require("assert"));
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const typeorm_2 = require("typeorm");
const workspace_manager_service_1 = require("../../../workspace/workspace-manager/workspace-manager.service");
const workspace_entity_1 = require("../workspace.entity");
let WorkspaceService = class WorkspaceService extends nestjs_query_typeorm_1.TypeOrmQueryService {
    constructor(workspaceRepository, workspaceManagerService) {
        super(workspaceRepository);
        this.workspaceRepository = workspaceRepository;
        this.workspaceManagerService = workspaceManagerService;
    }
    async deleteWorkspace(id) {
        const workspace = await this.workspaceRepository.findOneBy({ id });
        (0, assert_1.default)(workspace, 'Workspace not found');
        await this.workspaceManagerService.delete(id);
        await this.workspaceRepository.delete(id);
        return workspace;
    }
};
exports.WorkspaceService = WorkspaceService;
exports.WorkspaceService = WorkspaceService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(workspace_entity_1.Workspace, 'core')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        workspace_manager_service_1.WorkspaceManagerService])
], WorkspaceService);
//# sourceMappingURL=workspace.service.js.map