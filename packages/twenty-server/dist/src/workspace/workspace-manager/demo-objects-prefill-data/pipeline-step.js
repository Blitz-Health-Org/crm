"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipelineStepPrefillData = void 0;
const pipelineStepPrefillData = async (entityManager, schemaName) => {
    await entityManager
        .createQueryBuilder()
        .insert()
        .into(`${schemaName}.pipelineStep`, ['name', 'color', 'position'])
        .orIgnore()
        .values([
        {
            name: 'New',
            color: 'red',
            position: 0,
        },
        {
            name: 'Screening',
            color: 'purple',
            position: 1,
        },
        {
            name: 'Meeting',
            color: 'sky',
            position: 2,
        },
        {
            name: 'Proposal',
            color: 'turquoise',
            position: 3,
        },
        {
            name: 'Customer',
            color: 'yellow',
            position: 4,
        },
    ])
        .returning('*')
        .execute();
};
exports.pipelineStepPrefillData = pipelineStepPrefillData;
//# sourceMappingURL=pipeline-step.js.map