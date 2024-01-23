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
exports.WorkspaceCacheVersionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const workspace_cache_version_entity_1 = require("./workspace-cache-version.entity");
let WorkspaceCacheVersionService = class WorkspaceCacheVersionService {
    constructor(workspaceCacheVersionRepository) {
        this.workspaceCacheVersionRepository = workspaceCacheVersionRepository;
    }
    async incrementVersion(workspaceId) {
        var _a;
        const workspaceCacheVersion = (_a = (await this.workspaceCacheVersionRepository.findOne({
            where: { workspaceId },
        }))) !== null && _a !== void 0 ? _a : { version: '0' };
        await this.workspaceCacheVersionRepository.upsert({
            workspaceId,
            version: `${+workspaceCacheVersion.version + 1}`,
        }, ['workspaceId']);
    }
    async getVersion(workspaceId) {
        var _a;
        const workspaceCacheVersion = await this.workspaceCacheVersionRepository.findOne({
            where: { workspaceId },
        });
        return (_a = workspaceCacheVersion === null || workspaceCacheVersion === void 0 ? void 0 : workspaceCacheVersion.version) !== null && _a !== void 0 ? _a : '0';
    }
};
exports.WorkspaceCacheVersionService = WorkspaceCacheVersionService;
exports.WorkspaceCacheVersionService = WorkspaceCacheVersionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(workspace_cache_version_entity_1.WorkspaceCacheVersionEntity, 'metadata')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WorkspaceCacheVersionService);
//# sourceMappingURL=workspace-cache-version.service.js.map