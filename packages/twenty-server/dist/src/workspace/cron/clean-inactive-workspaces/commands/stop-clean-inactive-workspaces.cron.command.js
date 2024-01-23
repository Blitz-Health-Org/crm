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
exports.StopCleanInactiveWorkspacesCronCommand = void 0;
const common_1 = require("@nestjs/common");
const nest_commander_1 = require("nest-commander");
const message_queue_constants_1 = require("../../../../integrations/message-queue/message-queue.constants");
const message_queue_service_1 = require("../../../../integrations/message-queue/services/message-queue.service");
const clean_inactive_workspace_cron_pattern_1 = require("../clean-inactive-workspace.cron.pattern");
const clean_inactive_workspace_job_1 = require("../clean-inactive-workspace.job");
let StopCleanInactiveWorkspacesCronCommand = class StopCleanInactiveWorkspacesCronCommand extends nest_commander_1.CommandRunner {
    constructor(messageQueueService) {
        super();
        this.messageQueueService = messageQueueService;
    }
    async run() {
        await this.messageQueueService.removeCron(clean_inactive_workspace_job_1.CleanInactiveWorkspaceJob.name, clean_inactive_workspace_cron_pattern_1.cleanInactiveWorkspaceCronPattern);
    }
};
exports.StopCleanInactiveWorkspacesCronCommand = StopCleanInactiveWorkspacesCronCommand;
exports.StopCleanInactiveWorkspacesCronCommand = StopCleanInactiveWorkspacesCronCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'clean-inactive-workspace:cron:stop',
        description: 'Stops the clean inactive workspaces cron job',
    }),
    __param(0, (0, common_1.Inject)(message_queue_constants_1.MessageQueue.cronQueue)),
    __metadata("design:paramtypes", [message_queue_service_1.MessageQueueService])
], StopCleanInactiveWorkspacesCronCommand);
//# sourceMappingURL=stop-clean-inactive-workspaces.cron.command.js.map