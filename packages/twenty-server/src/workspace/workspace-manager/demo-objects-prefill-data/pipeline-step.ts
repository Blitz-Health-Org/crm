import { EntityManager } from 'typeorm';

export const pipelineStepPrefillData = async (
  entityManager: EntityManager,
  schemaName: string,
) => {
  await entityManager
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.pipelineStep`, ['name', 'color', 'position'])
    .orIgnore()
    .values([
      {
        name: 'Prospect',
        color: 'red',
        position: 0,
      },
      {
        name: 'Screening',
        color: 'purple',
        position: 1,
      },
      {
        name: 'Upcoming Renewal',
        color: 'sky',
        position: 2,
      },
      {
        name: 'Needs Attention',
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
