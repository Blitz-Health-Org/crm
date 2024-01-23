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
exports.QuickActionsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const is_work_email_1 = require("../../utils/is-work-email");
const stringify_without_key_quote_util_1 = require("../../workspace/workspace-query-builder/utils/stringify-without-key-quote.util");
const workspace_query_runner_service_1 = require("../../workspace/workspace-query-runner/workspace-query-runner.service");
const intelligence_service_1 = require("./intelligence.service");
const capitalize_1 = require("../../utils/capitalize");
let QuickActionsService = class QuickActionsService {
    constructor(workspaceQueryRunnunerService, intelligenceService) {
        this.workspaceQueryRunnunerService = workspaceQueryRunnunerService;
        this.intelligenceService = intelligenceService;
    }
    async createCompanyFromPerson(id, workspaceId, objectMetadataItemCollection) {
        var _a, _b, _c, _d;
        const personObjectMetadata = objectMetadataItemCollection.find((item) => item.nameSingular === 'person');
        if (!personObjectMetadata) {
            return;
        }
        const personRequest = await this.workspaceQueryRunnunerService.executeAndParse(`query {
        personCollection(filter: {id: {eq: "${id}"}}) {
              edges {
                node {
                  id
                  email
                  companyId
                }
              }
            }
          }
        `, personObjectMetadata, '', workspaceId);
        const person = (_b = (_a = personRequest.edges) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.node;
        if (!person) {
            return;
        }
        if (!person.companyId && person.email && (0, is_work_email_1.isWorkEmail)(person.email)) {
            const companyDomainName = (_c = person.email.split('@')) === null || _c === void 0 ? void 0 : _c[1].toLowerCase();
            const companyName = (0, capitalize_1.capitalize)(companyDomainName.split('.')[0]);
            let relatedCompanyId = (0, uuid_1.v4)();
            const companyObjectMetadata = objectMetadataItemCollection.find((item) => item.nameSingular === 'company');
            if (!companyObjectMetadata) {
                return;
            }
            const existingCompany = await this.workspaceQueryRunnunerService.executeAndParse(`query {companyCollection(filter: {domainName: {eq: "${companyDomainName}"}}) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          `, companyObjectMetadata, '', workspaceId);
            if ((_d = existingCompany.edges) === null || _d === void 0 ? void 0 : _d.length) {
                relatedCompanyId = existingCompany.edges[0].node.id;
            }
            await this.workspaceQueryRunnunerService.execute(`mutation {
          insertIntocompanyCollection(objects: ${(0, stringify_without_key_quote_util_1.stringifyWithoutKeyQuote)([
                {
                    id: relatedCompanyId,
                    name: companyName,
                    domainName: companyDomainName,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
            ])}) {
            affectedCount
            records {
              id
            }
          }
        }
      `, workspaceId);
            await this.workspaceQueryRunnunerService.execute(`mutation {
          updatepersonCollection(set: ${(0, stringify_without_key_quote_util_1.stringifyWithoutKeyQuote)({
                companyId: relatedCompanyId,
            })}, filter: { id: { eq: "${person.id}" } }) {
            affectedCount
            records {
              id
            }
          }
        }
      `, workspaceId);
        }
    }
    async executeQuickActionOnCompany(id, workspaceId, objectMetadataItem) {
        var _a, _b;
        const companyQuery = `query {
        companyCollection(filter: {id: {eq: "${id}"}}) {
          edges {
            node {
              id
              domainName
              createdAt
              linkedinLinkUrl
            }
          }
        }
     }
    `;
        const companyRequest = await this.workspaceQueryRunnunerService.executeAndParse(companyQuery, objectMetadataItem, '', workspaceId);
        const company = (_b = (_a = companyRequest.edges) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.node;
        if (!company) {
            return;
        }
        const enrichedData = await this.intelligenceService.enrichCompany(company.domainName);
        await this.workspaceQueryRunnunerService.execute(`mutation {
        updatecompanyCollection(set: ${(0, stringify_without_key_quote_util_1.stringifyWithoutKeyQuote)(enrichedData)}, filter: { id: { eq: "${id}" } }) {
            affectedCount
            records {
              id
            }
          }
      }`, workspaceId);
    }
};
exports.QuickActionsService = QuickActionsService;
exports.QuickActionsService = QuickActionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [workspace_query_runner_service_1.WorkspaceQueryRunnerService,
        intelligence_service_1.IntelligenceService])
], QuickActionsService);
//# sourceMappingURL=quick-actions.service.js.map