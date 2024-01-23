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
exports.GmailFullSyncCommand = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const nest_commander_1 = require("nest-commander");
const typeorm_2 = require("typeorm");
const feature_flag_entity_1 = require("../../../core/feature-flag/feature-flag.entity");
const messaging_producer_1 = require("../producers/messaging-producer");
const messaging_utils_service_1 = require("../services/messaging-utils.service");
let GmailFullSyncCommand = class GmailFullSyncCommand extends nest_commander_1.CommandRunner {
    constructor(messagingProducer, utils, featureFlagRepository) {
        super();
        this.messagingProducer = messagingProducer;
        this.utils = utils;
        this.featureFlagRepository = featureFlagRepository;
    }
    async run(_passedParam, options) {
        const isMessagingEnabled = await this.featureFlagRepository.findOneBy({
            workspaceId: options.workspaceId,
            key: feature_flag_entity_1.FeatureFlagKeys.IsMessagingEnabled,
            value: true,
        });
        if (!isMessagingEnabled) {
            throw new Error('Messaging is not enabled for this workspace');
        }
        await this.fetchWorkspaceMessages(options.workspaceId);
        return;
    }
    parseWorkspaceId(value) {
        return value;
    }
    async fetchWorkspaceMessages(workspaceId) {
        const connectedAccounts = await this.utils.getConnectedAccountsFromWorkspaceId(workspaceId);
        for (const connectedAccount of connectedAccounts) {
            await this.messagingProducer.enqueueGmailFullSync({ workspaceId, connectedAccountId: connectedAccount.id }, `${workspaceId}-${connectedAccount.id}`);
        }
    }
};
exports.GmailFullSyncCommand = GmailFullSyncCommand;
__decorate([
    (0, nest_commander_1.Option)({
        flags: '-w, --workspace-id [workspace_id]',
        description: 'workspace id',
        required: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], GmailFullSyncCommand.prototype, "parseWorkspaceId", null);
exports.GmailFullSyncCommand = GmailFullSyncCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'workspace:gmail-full-sync',
        description: 'Fetch messages of all workspaceMembers in a workspace.',
    }),
    __param(2, (0, typeorm_1.InjectRepository)(feature_flag_entity_1.FeatureFlagEntity, 'core')),
    __metadata("design:paramtypes", [messaging_producer_1.MessagingProducer,
        messaging_utils_service_1.MessagingUtilsService,
        typeorm_2.Repository])
], GmailFullSyncCommand);
//# sourceMappingURL=gmail-full-sync.command.js.map