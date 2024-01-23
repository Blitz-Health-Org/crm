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
exports.FetchMessagesByBatchesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const mailparser_1 = require("mailparser");
let FetchMessagesByBatchesService = class FetchMessagesByBatchesService {
    constructor() {
        this.httpService = axios_1.default.create({
            baseURL: 'https://www.googleapis.com/batch/gmail/v1',
        });
    }
    async fetchAllMessages(queries, accessToken) {
        const batchResponses = await this.fetchAllByBatches(queries, accessToken, 'batch_gmail_messages');
        return this.formatBatchResponsesAsGmailMessages(batchResponses);
    }
    async fetchAllByBatches(queries, accessToken, boundary) {
        const batchLimit = 100;
        let batchOffset = 0;
        let batchResponses = [];
        while (batchOffset < queries.length) {
            const batchResponse = await this.fetchBatch(queries, accessToken, batchOffset, batchLimit, boundary);
            batchResponses = batchResponses.concat(batchResponse);
            batchOffset += batchLimit;
        }
        return batchResponses;
    }
    async fetchBatch(queries, accessToken, batchOffset, batchLimit, boundary) {
        const limitedQueries = queries.slice(batchOffset, batchOffset + batchLimit);
        const response = await this.httpService.post('/', this.createBatchBody(limitedQueries, boundary), {
            headers: {
                'Content-Type': 'multipart/mixed; boundary=' + boundary,
                Authorization: 'Bearer ' + accessToken,
            },
        });
        return response;
    }
    createBatchBody(queries, boundary) {
        let batchBody = [];
        queries.forEach(function (call) {
            const method = 'GET';
            const uri = call.uri;
            batchBody = batchBody.concat([
                '--',
                boundary,
                '\r\n',
                'Content-Type: application/http',
                '\r\n\r\n',
                method,
                ' ',
                uri,
                '\r\n\r\n',
            ]);
        });
        return batchBody.concat(['--', boundary, '--']).join('');
    }
    parseBatch(responseCollection) {
        const responseItems = [];
        const boundary = this.getBatchSeparator(responseCollection);
        const responseLines = responseCollection.data.split('--' + boundary);
        responseLines.forEach(function (response) {
            const startJson = response.indexOf('{');
            const endJson = response.lastIndexOf('}');
            if (startJson < 0 || endJson < 0)
                return;
            const responseJson = response.substring(startJson, endJson + 1);
            const item = JSON.parse(responseJson);
            responseItems.push(item);
        });
        return responseItems;
    }
    getBatchSeparator(responseCollection) {
        const headers = responseCollection.headers;
        const contentType = headers['content-type'];
        if (!contentType)
            return '';
        const components = contentType.split('; ');
        const boundary = components.find((item) => item.startsWith('boundary='));
        return (boundary === null || boundary === void 0 ? void 0 : boundary.replace('boundary=', '').trim()) || '';
    }
    async formatBatchResponseAsGmailMessage(responseCollection) {
        const parsedResponses = this.parseBatch(responseCollection);
        const errors = [];
        const formattedResponse = Promise.all(parsedResponses.map(async (message) => {
            if (message.error) {
                console.log('Error', message.error);
                errors.push(message.error);
                return;
            }
            const { historyId, id, threadId, internalDate, raw } = message;
            const body = atob(raw === null || raw === void 0 ? void 0 : raw.replace(/-/g, '+').replace(/_/g, '/'));
            try {
                const parsed = await (0, mailparser_1.simpleParser)(body);
                const { subject, messageId, from, to, cc, bcc, text, html, attachments, } = parsed;
                if (!from)
                    throw new Error('From value is missing');
                if (!to)
                    throw new Error('To value is missing');
                const participants = [
                    ...this.formatAddressObjectAsParticipants(from, 'from'),
                    ...this.formatAddressObjectAsParticipants(to, 'to'),
                    ...this.formatAddressObjectAsParticipants(cc, 'cc'),
                    ...this.formatAddressObjectAsParticipants(bcc, 'bcc'),
                ];
                const messageFromGmail = {
                    historyId,
                    externalId: id,
                    headerMessageId: messageId || '',
                    subject: subject || '',
                    messageThreadExternalId: threadId,
                    internalDate,
                    fromHandle: from.value[0].address || '',
                    fromDisplayName: from.value[0].name || '',
                    participants,
                    text: text || '',
                    html: html || '',
                    attachments,
                };
                return messageFromGmail;
            }
            catch (error) {
                console.log('Error', error);
                errors.push(error);
            }
        }));
        const filteredMessages = (await formattedResponse).filter((message) => message);
        return { messages: filteredMessages, errors };
    }
    formatAddressObjectAsArray(addressObject) {
        return Array.isArray(addressObject) ? addressObject : [addressObject];
    }
    formatAddressObjectAsParticipants(addressObject, role) {
        if (!addressObject)
            return [];
        const addressObjects = this.formatAddressObjectAsArray(addressObject);
        const participants = addressObjects.map((addressObject) => {
            const emailAdresses = addressObject.value;
            return emailAdresses.map((emailAddress) => {
                const { name, address } = emailAddress;
                return {
                    role,
                    handle: address || '',
                    displayName: name || '',
                };
            });
        });
        return participants.flat();
    }
    async formatBatchResponsesAsGmailMessages(batchResponses) {
        const messagesAndErrors = await Promise.all(batchResponses.map(async (response) => {
            return this.formatBatchResponseAsGmailMessage(response);
        }));
        const messages = messagesAndErrors.map((item) => item.messages).flat();
        const errors = messagesAndErrors.map((item) => item.errors).flat();
        return { messages, errors };
    }
};
exports.FetchMessagesByBatchesService = FetchMessagesByBatchesService;
exports.FetchMessagesByBatchesService = FetchMessagesByBatchesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FetchMessagesByBatchesService);
//# sourceMappingURL=fetch-messages-by-batches.service.js.map