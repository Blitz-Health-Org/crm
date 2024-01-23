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
exports.WorkspaceHealthCommand = void 0;
const nest_commander_1 = require("nest-commander");
const chalk_1 = __importDefault(require("chalk"));
const workspace_health_options_interface_1 = require("../interfaces/workspace-health-options.interface");
const workspace_health_service_1 = require("../workspace-health.service");
let WorkspaceHealthCommand = class WorkspaceHealthCommand extends nest_commander_1.CommandRunner {
    constructor(workspaceHealthService) {
        super();
        this.workspaceHealthService = workspaceHealthService;
    }
    async run(_passedParam, options) {
        var _a;
        const issues = await this.workspaceHealthService.healthCheck(options.workspaceId, {
            mode: (_a = options.mode) !== null && _a !== void 0 ? _a : workspace_health_options_interface_1.WorkspaceHealthMode.All,
        });
        if (issues.length === 0) {
            console.log(chalk_1.default.green('Workspace is healthy'));
        }
        else {
            console.log(chalk_1.default.red('Workspace is not healthy'));
            if (options.verbose) {
                console.group(chalk_1.default.red('Issues'));
                issues.forEach((issue) => {
                    console.log(chalk_1.default.yellow(JSON.stringify(issue, null, 2)));
                });
                console.groupEnd();
            }
        }
    }
    parseWorkspaceId(value) {
        return value;
    }
    parseVerbose() {
        return true;
    }
    parseMode(value) {
        return value;
    }
};
exports.WorkspaceHealthCommand = WorkspaceHealthCommand;
__decorate([
    (0, nest_commander_1.Option)({
        flags: '-w, --workspace-id [workspace_id]',
        description: 'workspace id',
        required: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], WorkspaceHealthCommand.prototype, "parseWorkspaceId", null);
__decorate([
    (0, nest_commander_1.Option)({
        flags: '-v, --verbose',
        description: 'Detailed output',
        required: false,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], WorkspaceHealthCommand.prototype, "parseVerbose", null);
__decorate([
    (0, nest_commander_1.Option)({
        flags: '-m, --mode [mode]',
        description: 'Mode of the health check [structure, metadata, all]',
        required: false,
        defaultValue: workspace_health_options_interface_1.WorkspaceHealthMode.All,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], WorkspaceHealthCommand.prototype, "parseMode", null);
exports.WorkspaceHealthCommand = WorkspaceHealthCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'workspace:health',
        description: 'Check health of the given workspace.',
    }),
    __metadata("design:paramtypes", [workspace_health_service_1.WorkspaceHealthService])
], WorkspaceHealthCommand);
//# sourceMappingURL=workspace-health.command.js.map