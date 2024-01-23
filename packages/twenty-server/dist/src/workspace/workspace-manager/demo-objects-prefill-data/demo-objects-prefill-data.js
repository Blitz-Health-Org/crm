"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoObjectsPrefillData = void 0;
const view_1 = require("./view");
const company_1 = require("./company");
const person_1 = require("./person");
const pipeline_step_1 = require("./pipeline-step");
const workspace_member_1 = require("./workspace-member");
const opportunity_1 = require("./opportunity");
const demoObjectsPrefillData = async (workspaceDataSource, schemaName, objectMetadata) => {
    const objectMetadataMap = objectMetadata.reduce((acc, object) => {
        acc[object.nameSingular] = {
            id: object.id,
            fields: object.fields.reduce((acc, field) => {
                acc[field.name] = field.id;
                return acc;
            }, {}),
        };
        return acc;
    }, {});
    const queryRunner = workspaceDataSource.createQueryRunner();
    await queryRunner.connect();
    workspaceDataSource.transaction(async (entityManager) => {
        await (0, company_1.companyPrefillData)(entityManager, schemaName);
        await (0, person_1.personPrefillData)(entityManager, schemaName);
        await (0, view_1.viewPrefillData)(entityManager, schemaName, objectMetadataMap);
        await (0, pipeline_step_1.pipelineStepPrefillData)(entityManager, schemaName);
        await (0, opportunity_1.seedDemoOpportunity)(entityManager, schemaName);
        await (0, workspace_member_1.workspaceMemberPrefillData)(entityManager, schemaName);
    });
};
exports.demoObjectsPrefillData = demoObjectsPrefillData;
//# sourceMappingURL=demo-objects-prefill-data.js.map