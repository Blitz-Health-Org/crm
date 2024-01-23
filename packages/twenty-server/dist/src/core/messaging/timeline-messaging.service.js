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
exports.TimelineMessagingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_service_1 = require("../../database/typeorm/typeorm.service");
const data_source_service_1 = require("../../metadata/data-source/data-source.service");
let TimelineMessagingService = class TimelineMessagingService {
    constructor(dataSourceService, typeORMService) {
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
    }
    async getMessagesFromPersonIds(workspaceId, personIds) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        const messageThreads = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`
    SELECT 
        subquery.*,
        message_count,
        last_message_subject,
        last_message_body,
        last_message_received_at,
        last_message_participant_handle,
        last_message_participant_displayName
    FROM (
        SELECT 
            mt.*,
            COUNT(m."id") OVER (PARTITION BY mt."id") AS message_count,
            FIRST_VALUE(m."subject") OVER (PARTITION BY mt."id" ORDER BY m."receivedAt" DESC) AS last_message_subject,
            FIRST_VALUE(m."body") OVER (PARTITION BY mt."id" ORDER BY m."receivedAt" DESC) AS last_message_body,
            FIRST_VALUE(m."receivedAt") OVER (PARTITION BY mt."id" ORDER BY m."receivedAt" DESC) AS last_message_received_at,
            FIRST_VALUE(mr."handle") OVER (PARTITION BY mt."id" ORDER BY m."receivedAt" DESC) AS last_message_participant_handle,
            FIRST_VALUE(mr."displayName") OVER (PARTITION BY mt."id" ORDER BY m."receivedAt" DESC) AS last_message_participant_displayName,
            ROW_NUMBER() OVER (PARTITION BY mt."id" ORDER BY m."receivedAt" DESC) AS rn
        FROM 
            ${dataSourceMetadata.schema}."messageThread" mt
        LEFT JOIN 
            ${dataSourceMetadata.schema}."message" m ON mt."id" = m."messageThreadId"
        LEFT JOIN 
            ${dataSourceMetadata.schema}."messageParticipant" mr ON m."id" = mr."messageId"
        WHERE 
            mr."personId" IN (SELECT unnest($1::uuid[]))
    ) AS subquery
    WHERE 
        subquery.rn = 1
    ORDER BY 
        subquery.last_message_received_at DESC
    LIMIT 10;
`, [personIds]));
        const formattedMessageThreads = messageThreads.map((messageThread) => {
            return {
                read: true,
                senderName: messageThread.last_message_participant_handle,
                senderPictureUrl: '',
                numberOfMessagesInThread: messageThread.message_count,
                subject: messageThread.last_message_subject,
                body: messageThread.last_message_body,
                receivedAt: messageThread.last_message_received_at,
            };
        });
        return formattedMessageThreads;
    }
    async getMessagesFromCompanyId(workspaceId, companyId) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        const personIds = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`
        SELECT 
            p."id"
        FROM
            ${dataSourceMetadata.schema}."person" p
        WHERE
            p."companyId" = $1
        `, [companyId]));
        if (!personIds) {
            return [];
        }
        const formattedPersonIds = personIds.map((personId) => personId.id);
        const messageThreads = await this.getMessagesFromPersonIds(workspaceId, formattedPersonIds);
        return messageThreads;
    }
};
exports.TimelineMessagingService = TimelineMessagingService;
exports.TimelineMessagingService = TimelineMessagingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService])
], TimelineMessagingService);
//# sourceMappingURL=timeline-messaging.service.js.map