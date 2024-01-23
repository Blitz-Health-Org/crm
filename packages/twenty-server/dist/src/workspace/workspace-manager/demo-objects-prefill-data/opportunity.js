"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDemoOpportunity = void 0;
const uuid_1 = require("uuid");
const tableName = 'opportunity';
const getRandomProbability = () => {
    const firstDigit = Math.floor(Math.random() * 9) + 1;
    return firstDigit / 10;
};
const getRandomPipelineStepId = (pipelineStepIds) => pipelineStepIds[Math.floor(Math.random() * pipelineStepIds.length)].id;
const generateRandomAmountMicros = () => {
    const firstDigit = Math.floor(Math.random() * 9) + 1;
    return firstDigit * 10000000000;
};
const generateOpportunities = (companies, pipelineStepIds) => {
    return companies.map((company) => ({
        id: (0, uuid_1.v4)(),
        amountAmountMicros: generateRandomAmountMicros(),
        amountCurrencyCode: 'USD',
        closeDate: new Date(),
        probability: getRandomProbability(),
        pipelineStepId: getRandomPipelineStepId(pipelineStepIds),
        pointOfContactId: company.personId,
        companyId: company.id,
    }));
};
const seedDemoOpportunity = async (entityManager, schemaName) => {
    const companiesWithPeople = await (entityManager === null || entityManager === void 0 ? void 0 : entityManager.query(`SELECT company.*, person.id AS "personId"
     FROM ${schemaName}.company
     LEFT JOIN ${schemaName}.person ON company.id = "person"."companyId"
     LIMIT 50`));
    const pipelineStepIds = await (entityManager === null || entityManager === void 0 ? void 0 : entityManager.query(`SELECT id FROM ${schemaName}."pipelineStep"`));
    const opportunities = generateOpportunities(companiesWithPeople, pipelineStepIds);
    await entityManager
        .createQueryBuilder()
        .insert()
        .into(`${schemaName}.${tableName}`, [
        'id',
        'amountAmountMicros',
        'amountCurrencyCode',
        'closeDate',
        'probability',
        'pipelineStepId',
        'pointOfContactId',
        'companyId',
    ])
        .orIgnore()
        .values(opportunities)
        .execute();
};
exports.seedDemoOpportunity = seedDemoOpportunity;
//# sourceMappingURL=opportunity.js.map