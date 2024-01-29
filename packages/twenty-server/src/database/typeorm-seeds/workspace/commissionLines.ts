import { DataSource } from 'typeorm';

const tableName = 'commissionLines';

export const seedCommissionLines = async (
  workspaceDataSource: DataSource,
  schemaName: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${tableName}`, ['client'])
    .orIgnore()
    .values([])
    .execute();
};
