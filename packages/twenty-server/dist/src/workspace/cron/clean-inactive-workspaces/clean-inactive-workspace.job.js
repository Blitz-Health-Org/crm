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
var CleanInactiveWorkspaceJob_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanInactiveWorkspaceJob = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const render_1 = require("@react-email/render");
const typeorm_2 = require("typeorm");
const object_metadata_service_1 = require("../../../metadata/object-metadata/object-metadata.service");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const user_service_1 = require("../../../core/user/services/user.service");
const email_service_1 = require("../../../integrations/email/email.service");
const clean_inactive_workspaces_email_1 = __importDefault(require("./clean-inactive-workspaces.email"));
const environment_service_1 = require("../../../integrations/environment/environment.service");
const feature_flag_entity_1 = require("../../../core/feature-flag/feature-flag.entity");
const delete_inactive_workspaces_email_1 = __importDefault(require("./delete-inactive-workspaces.email"));
const compute_object_target_table_util_1 = require("../../utils/compute-object-target-table.util");
const MILLISECONDS_IN_ONE_DAY = 1000 * 3600 * 24;
let CleanInactiveWorkspaceJob = CleanInactiveWorkspaceJob_1 = class CleanInactiveWorkspaceJob {
    constructor(dataSourceService, objectMetadataService, typeORMService, userService, emailService, environmentService, featureFlagRepository) {
        this.dataSourceService = dataSourceService;
        this.objectMetadataService = objectMetadataService;
        this.typeORMService = typeORMService;
        this.userService = userService;
        this.emailService = emailService;
        this.environmentService = environmentService;
        this.featureFlagRepository = featureFlagRepository;
        this.logger = new common_1.Logger(CleanInactiveWorkspaceJob_1.name);
        this.inactiveDaysBeforeDelete =
            this.environmentService.getInactiveDaysBeforeDelete();
        this.inactiveDaysBeforeEmail =
            this.environmentService.getInactiveDaysBeforeEmail();
    }
    async getmostRecentUpdatedAt(dataSource, objectsMetadata) {
        const tableNames = objectsMetadata
            .filter((objectMetadata) => objectMetadata.workspaceId === dataSource.workspaceId)
            .map((objectMetadata) => (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata));
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSource);
        let mostRecentUpdatedAtDate = new Date(0);
        for (const tableName of tableNames) {
            const mostRecentTableUpdatedAt = (await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT MAX("updatedAt") FROM ${dataSource.schema}."${tableName}"`)))[0].max;
            if (mostRecentTableUpdatedAt) {
                const mostRecentTableUpdatedAtDate = new Date(mostRecentTableUpdatedAt);
                if (!mostRecentUpdatedAtDate ||
                    mostRecentTableUpdatedAtDate > mostRecentUpdatedAtDate) {
                    mostRecentUpdatedAtDate = mostRecentTableUpdatedAtDate;
                }
            }
        }
        return mostRecentUpdatedAtDate;
    }
    async warnWorkspaceUsers(dataSource, daysSinceInactive) {
        var _a;
        const workspaceMembers = await this.userService.loadWorkspaceMembers(dataSource);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSource);
        const displayName = (_a = (await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT "displayName" FROM core.workspace WHERE id='${dataSource.workspaceId}'`)))) === null || _a === void 0 ? void 0 : _a[0].displayName;
        this.logger.log(`Sending workspace ${dataSource.workspaceId} inactive since ${daysSinceInactive} days emails to users ['${workspaceMembers
            .map((workspaceUser) => workspaceUser.email)
            .join(', ')}']`);
        workspaceMembers.forEach((workspaceMember) => {
            const emailData = {
                daysLeft: this.inactiveDaysBeforeDelete - daysSinceInactive,
                userName: `${workspaceMember.nameFirstName} ${workspaceMember.nameLastName}`,
                workspaceDisplayName: `${displayName}`,
            };
            const emailTemplate = (0, clean_inactive_workspaces_email_1.default)(emailData);
            const html = (0, render_1.render)(emailTemplate, {
                pretty: true,
            });
            const text = (0, render_1.render)(emailTemplate, {
                plainText: true,
            });
            this.emailService.send({
                to: workspaceMember.email,
                from: `${this.environmentService.getEmailFromName()} <${this.environmentService.getEmailFromAddress()}>`,
                subject: 'Action Needed to Prevent Workspace Deletion',
                html,
                text,
            });
        });
    }
    async deleteWorkspace(dataSource, daysSinceInactive) {
        this.logger.log(`Sending email to delete workspace ${dataSource.workspaceId} inactive since ${daysSinceInactive} days`);
        const emailData = {
            daysSinceDead: daysSinceInactive - this.inactiveDaysBeforeDelete,
            workspaceId: `${dataSource.workspaceId}`,
        };
        const emailTemplate = (0, delete_inactive_workspaces_email_1.default)(emailData);
        const html = (0, render_1.render)(emailTemplate, {
            pretty: true,
        });
        const text = `Workspace '${dataSource.workspaceId}' should be deleted as inactive since ${daysSinceInactive} days`;
        await this.emailService.send({
            to: this.environmentService.getEmailSystemAddress(),
            from: `${this.environmentService.getEmailFromName()} <${this.environmentService.getEmailFromAddress()}>`,
            subject: 'Action Needed to Delete Workspace',
            html,
            text,
        });
    }
    async processWorkspace(dataSource, objectsMetadata) {
        const mostRecentUpdatedAt = await this.getmostRecentUpdatedAt(dataSource, objectsMetadata);
        const daysSinceInactive = Math.floor((new Date().getTime() - mostRecentUpdatedAt.getTime()) /
            MILLISECONDS_IN_ONE_DAY);
        if (daysSinceInactive > this.inactiveDaysBeforeDelete) {
            await this.deleteWorkspace(dataSource, daysSinceInactive);
        }
        else if (daysSinceInactive > this.inactiveDaysBeforeEmail) {
            await this.warnWorkspaceUsers(dataSource, daysSinceInactive);
        }
    }
    async isWorkspaceCleanable(dataSource) {
        const workspaceFeatureFlags = await this.featureFlagRepository.find({
            where: { workspaceId: dataSource.workspaceId },
        });
        return (workspaceFeatureFlags.filter((workspaceFeatureFlag) => workspaceFeatureFlag.key === feature_flag_entity_1.FeatureFlagKeys.IsWorkspaceCleanable &&
            workspaceFeatureFlag.value).length > 0);
    }
    async handle() {
        this.logger.log('Job running...');
        if (!this.inactiveDaysBeforeDelete && !this.inactiveDaysBeforeEmail) {
            this.logger.log(`'WORKSPACE_INACTIVE_DAYS_BEFORE_NOTIFICATION' and 'WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION' environment variables not set, please check this doc for more info: https://docs.twenty.com/start/self-hosting/environment-variables`);
            return;
        }
        const dataSources = await this.dataSourceService.getManyDataSourceMetadata();
        const objectsMetadata = await this.objectMetadataService.findMany();
        for (const dataSource of dataSources) {
            if (!(await this.isWorkspaceCleanable(dataSource))) {
                continue;
            }
            this.logger.log(`Cleaning Workspace ${dataSource.workspaceId}`);
            await this.processWorkspace(dataSource, objectsMetadata);
        }
        this.logger.log('job done!');
    }
};
exports.CleanInactiveWorkspaceJob = CleanInactiveWorkspaceJob;
exports.CleanInactiveWorkspaceJob = CleanInactiveWorkspaceJob = CleanInactiveWorkspaceJob_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(6, (0, typeorm_1.InjectRepository)(feature_flag_entity_1.FeatureFlagEntity, 'core')),
    __metadata("design:paramtypes", [data_source_service_1.DataSourceService,
        object_metadata_service_1.ObjectMetadataService,
        typeorm_service_1.TypeORMService,
        user_service_1.UserService,
        email_service_1.EmailService,
        environment_service_1.EnvironmentService,
        typeorm_2.Repository])
], CleanInactiveWorkspaceJob);
//# sourceMappingURL=clean-inactive-workspace.job.js.map