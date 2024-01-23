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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingUtilsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
let MessagingUtilsService = class MessagingUtilsService {
    constructor(dataSourceService, typeORMService) {
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
    }
    createQueriesFromMessageIds(messageExternalIds) {
        return messageExternalIds.map((messageId) => ({
            uri: '/gmail/v1/users/me/messages/' + messageId + '?format=RAW',
        }));
    }
    getThreadsFromMessages(messages) {
        return messages.reduce((acc, message) => {
            if (message.externalId === message.messageThreadExternalId) {
                acc.push({
                    id: message.messageThreadExternalId,
                    subject: message.subject,
                });
            }
            return acc;
        }, []);
    }
    async saveMessageThreads(threads, dataSourceMetadata, workspaceDataSource, connectedAccountId) {
        const messageChannel = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."messageChannel" WHERE "connectedAccountId" = $1`, [connectedAccountId]));
        if (!messageChannel.length) {
            throw new Error('No message channel found for this connected account');
        }
        for (const thread of threads) {
            await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`INSERT INTO ${dataSourceMetadata.schema}."messageThread" ("externalId", "subject", "messageChannelId", "visibility") VALUES ($1, $2, $3, $4)`, [thread.id, thread.subject, messageChannel[0].id, 'default']));
        }
    }
    async saveMessages(messages, dataSourceMetadata, workspaceDataSource, connectedAccount) {
        var _a, _b;
        for (const message of messages) {
            const { externalId, headerMessageId, subject, messageThreadExternalId, internalDate, fromHandle, fromDisplayName, participants, text, } = message;
            const receivedAt = new Date(parseInt(internalDate));
            const messageThread = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."messageThread" WHERE "externalId" = $1`, [messageThreadExternalId]));
            const messageId = (0, uuid_1.v4)();
            const person = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."person" WHERE "email" = $1`, [fromHandle]));
            const personId = (_a = person[0]) === null || _a === void 0 ? void 0 : _a.id;
            const workspaceMember = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT "workspaceMember"."id" FROM ${dataSourceMetadata.schema}."workspaceMember"
        JOIN ${dataSourceMetadata.schema}."connectedAccount" ON ${dataSourceMetadata.schema}."workspaceMember"."id" = ${dataSourceMetadata.schema}."connectedAccount"."accountOwnerId"
        WHERE ${dataSourceMetadata.schema}."connectedAccount"."handle" = $1`, [fromHandle]));
            const workspaceMemberId = (_b = workspaceMember[0]) === null || _b === void 0 ? void 0 : _b.id;
            const messageDirection = connectedAccount.handle === fromHandle ? 'outgoing' : 'incoming';
            await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.transaction(async (manager) => {
                var _a;
                await manager.query(`INSERT INTO ${dataSourceMetadata.schema}."message" ("id", "externalId", "headerMessageId", "subject", "receivedAt", "messageThreadId", "direction", "body") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [
                    messageId,
                    externalId,
                    headerMessageId,
                    subject,
                    receivedAt,
                    (_a = messageThread[0]) === null || _a === void 0 ? void 0 : _a.id,
                    messageDirection,
                    text,
                ]);
                await manager.query(`INSERT INTO ${dataSourceMetadata.schema}."messageParticipant" ("messageId", "role", "handle", "displayName", "personId", "workspaceMemberId") VALUES ($1, $2, $3, $4, $5, $6)`, [
                    messageId,
                    'from',
                    fromHandle,
                    fromDisplayName,
                    personId,
                    workspaceMemberId,
                ]);
                await this.saveMessageParticipants(participants, dataSourceMetadata, messageId, manager);
            }));
        }
    }
    async saveMessageParticipants(participants, dataSourceMetadata, messageId, manager) {
        var _a, _b;
        if (!participants)
            return;
        for (const participant of participants) {
            const participantPerson = await manager.query(`SELECT * FROM ${dataSourceMetadata.schema}."person" WHERE "email" = $1`, [participant.handle]);
            const participantPersonId = (_a = participantPerson[0]) === null || _a === void 0 ? void 0 : _a.id;
            const workspaceMember = await manager.query(`SELECT "workspaceMember"."id" FROM ${dataSourceMetadata.schema}."workspaceMember"
          JOIN ${dataSourceMetadata.schema}."connectedAccount" ON ${dataSourceMetadata.schema}."workspaceMember"."id" = ${dataSourceMetadata.schema}."connectedAccount"."accountOwnerId"
          WHERE ${dataSourceMetadata.schema}."connectedAccount"."handle" = $1`, [participant.handle]);
            const participantWorkspaceMemberId = (_b = workspaceMember[0]) === null || _b === void 0 ? void 0 : _b.id;
            await manager.query(`INSERT INTO ${dataSourceMetadata.schema}."messageParticipant" ("messageId", "role", "handle", "displayName", "personId", "workspaceMemberId") VALUES ($1, $2, $3, $4, $5, $6)`, [
                messageId,
                participant.role,
                participant.handle,
                participant.displayName,
                participantPersonId,
                participantWorkspaceMemberId,
            ]);
        }
    }
    async getSavedMessageIdsAndThreadIds(messageEternalIds, connectedAccountId, dataSourceMetadata, workspaceDataSource) {
        const messageIdsInDatabase = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT message."externalId" AS "messageExternalId",
      "messageThread"."externalId" AS "messageThreadExternalId"
      FROM ${dataSourceMetadata.schema}."message" message
      LEFT JOIN ${dataSourceMetadata.schema}."messageThread" "messageThread" ON message."messageThreadId" = "messageThread"."id" 
      LEFT JOIN ${dataSourceMetadata.schema}."messageChannel" ON "messageThread"."messageChannelId" = ${dataSourceMetadata.schema}."messageChannel"."id"
      WHERE ${dataSourceMetadata.schema}."messageChannel"."connectedAccountId" = $1
        AND message."externalId" = ANY($2)`, [connectedAccountId, messageEternalIds]));
        return {
            savedMessageIds: messageIdsInDatabase.map((message) => message.messageExternalId),
            savedThreadIds: [
                ...new Set(messageIdsInDatabase.map((message) => message.messageThreadExternalId)),
            ],
        };
    }
    async getConnectedAccountsFromWorkspaceId(workspaceId) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        if (!workspaceDataSource) {
            throw new Error('No workspace data source found');
        }
        const connectedAccounts = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."connectedAccount" WHERE "provider" = 'gmail'`));
        if (!connectedAccounts || connectedAccounts.length === 0) {
            throw new Error('No connected account found');
        }
        return connectedAccounts;
    }
    async getDataSourceMetadataWorkspaceMetadataAndConnectedAccount(workspaceId, connectedAccountId) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        if (!workspaceDataSource) {
            throw new Error('No workspace data source found');
        }
        const connectedAccounts = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."connectedAccount" WHERE "provider" = 'gmail' AND "id" = $1`, [connectedAccountId]));
        if (!connectedAccounts || connectedAccounts.length === 0) {
            throw new Error('No connected account found');
        }
        return {
            dataSourceMetadata,
            workspaceDataSource,
            connectedAccount: connectedAccounts[0],
        };
    }
    async saveLastSyncHistoryId(historyId, connectedAccountId, dataSourceMetadata, workspaceDataSource) {
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`UPDATE ${dataSourceMetadata.schema}."connectedAccount" SET "lastSyncHistoryId" = $1 WHERE "id" = $2`, [historyId, connectedAccountId]));
    }
    async deleteMessages(messageIds, dataSourceMetadata, workspaceDataSource) {
        if (!messageIds || messageIds.length === 0) {
            return;
        }
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`DELETE FROM ${dataSourceMetadata.schema}."message" WHERE "externalId" = ANY($1)`, [messageIds]));
    }
    async deleteEmptyThreads(messageIds, connectedAccountId, dataSourceMetadata, workspaceDataSource) {
        const messageThreadsToDelete = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT "messageThread"."id" FROM ${dataSourceMetadata.schema}."messageThread" "messageThread"
      LEFT JOIN ${dataSourceMetadata.schema}."message" message ON "messageThread"."id" = message."messageThreadId"
      LEFT JOIN ${dataSourceMetadata.schema}."messageChannel" ON "messageThread"."messageChannelId" = ${dataSourceMetadata.schema}."messageChannel"."id"
      WHERE "messageThread"."externalId" = ANY($1)
      AND ${dataSourceMetadata.schema}."messageChannel"."connectedAccountId" = $2
      GROUP BY "messageThread"."id"
      HAVING COUNT(message."id") = 0`, [messageIds, connectedAccountId]));
        if (!messageThreadsToDelete || messageThreadsToDelete.length === 0) {
            return;
        }
        const messageThreadIdsToDelete = messageThreadsToDelete.map((messageThread) => messageThread.id);
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`DELETE FROM ${dataSourceMetadata.schema}."messageThread" WHERE "id" = ANY($1)`, [messageThreadIdsToDelete]));
    }
};
exports.MessagingUtilsService = MessagingUtilsService;
exports.MessagingUtilsService = MessagingUtilsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService])
], MessagingUtilsService);
//# sourceMappingURL=messaging-utils.service.js.map