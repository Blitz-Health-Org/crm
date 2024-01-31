import { EntityManager } from 'typeorm';

import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';

export const viewPrefillData = async (
  entityManager: EntityManager,
  schemaName: string,
  objectMetadataMap: Record<string, ObjectMetadataEntity>,
) => {
  // Creating views
  const createdViews = await entityManager
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.view`, ['name', 'objectMetadataId', 'type'])
    .orIgnore()
    .values([
      {
        name: 'All Companies',
        objectMetadataId: objectMetadataMap['company'].id,
        type: 'table',
      },
      {
        name: 'All People',
        objectMetadataId: objectMetadataMap['person'].id,
        type: 'table',
      },
      {
        name: 'All Opportunities',
        objectMetadataId: objectMetadataMap['opportunity'].id,
        type: 'kanban',
      },
      {
        name: 'All Commission Lines',
        objectMetadataId: objectMetadataMap['commissionLine'].id,
        type: 'table',
      },
    ])
    .returning('*')
    .execute();

  const viewIdMap = createdViews.raw.reduce((acc, view) => {
    acc[view.name] = view.id;

    return acc;
  }, {});

  console.log('LOG objectmetadatmap', objectMetadataMap);

  // Creating viewFields
  await entityManager
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.viewField`, [
      'fieldMetadataId',
      'viewId',
      'position',
      'isVisible',
      'size',
    ])
    .orIgnore()
    .values([
      // Company
      {
        fieldMetadataId: objectMetadataMap['company'].fields['name'],
        viewId: viewIdMap['All Companies'],
        position: 0,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['company'].fields['domainName'],
        viewId: viewIdMap['All Companies'],
        position: 1,
        isVisible: true,
        size: 100,
      },
      {
        fieldMetadataId: objectMetadataMap['company'].fields['accountOwner'],
        viewId: viewIdMap['All Companies'],
        position: 2,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['company'].fields['createdAt'],
        viewId: viewIdMap['All Companies'],
        position: 3,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['company'].fields['employees'],
        viewId: viewIdMap['All Companies'],
        position: 4,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['company'].fields['linkedinLink'],
        viewId: viewIdMap['All Companies'],
        position: 5,
        isVisible: true,
        size: 170,
      },
      {
        fieldMetadataId: objectMetadataMap['company'].fields['address'],
        viewId: viewIdMap['All Companies'],
        position: 6,
        isVisible: true,
        size: 170,
      },
      // Person
      {
        fieldMetadataId: objectMetadataMap['person'].fields['name'],
        viewId: viewIdMap['All People'],
        position: 0,
        isVisible: true,
        size: 210,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['email'],
        viewId: viewIdMap['All People'],
        position: 1,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['company'],
        viewId: viewIdMap['All People'],
        position: 2,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['phone'],
        viewId: viewIdMap['All People'],
        position: 3,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['createdAt'],
        viewId: viewIdMap['All People'],
        position: 4,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['city'],
        viewId: viewIdMap['All People'],
        position: 5,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['jobTitle'],
        viewId: viewIdMap['All People'],
        position: 6,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['linkedinLink'],
        viewId: viewIdMap['All People'],
        position: 7,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['person'].fields['xLink'],
        viewId: viewIdMap['All People'],
        position: 8,
        isVisible: true,
        size: 150,
      },
      // Opportunity
      {
        fieldMetadataId: objectMetadataMap['opportunity'].fields['amount'],
        viewId: viewIdMap['All Opportunities'],
        position: 0,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['opportunity'].fields['closeDate'],
        viewId: viewIdMap['All Opportunities'],
        position: 1,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId: objectMetadataMap['opportunity'].fields['probability'],
        viewId: viewIdMap['All Opportunities'],
        position: 2,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId:
          objectMetadataMap['opportunity'].fields['pointOfContact'],
        viewId: viewIdMap['All Opportunities'],
        position: 3,
        isVisible: true,
        size: 150,
      },
      //Commission Lines
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['company'],
        viewId: viewIdMap['All Commission Lines'],
        position: 0,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId:
          objectMetadataMap['commissionLine'].fields['medicalPlan'],
        viewId: viewIdMap['All Commission Lines'],
        position: 1,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId:
          objectMetadataMap['commissionLine'].fields['createdAt'],
        viewId: viewIdMap['All Commission Lines'],
        position: 2,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['aor'],
        viewId: viewIdMap['All Commission Lines'],
        position: 3,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId:
          objectMetadataMap['commissionLine'].fields['monthlyInvoiceEstimate'],
        viewId: viewIdMap['All Commission Lines'],
        position: 4,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['carrier'],
        viewId: viewIdMap['All Commission Lines'],
        position: 5,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId:
          objectMetadataMap['commissionLine'].fields['enrolledEmployees'],
        viewId: viewIdMap['All Commission Lines'],
        position: 6,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['ee'],
        viewId: viewIdMap['All Commission Lines'],
        position: 7,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId:
          objectMetadataMap['commissionLine'].fields['renewalDate'],
        viewId: viewIdMap['All Commission Lines'],
        position: 8,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId:
          objectMetadataMap['commissionLine'].fields[
            'estimatedAnnualCommission'
          ],
        viewId: viewIdMap['commisionRate'],
        position: 9,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['jan'],
        viewId: viewIdMap['All Commission Lines'],
        position: 14,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['feb'],
        viewId: viewIdMap['All Commission Lines'],
        position: 15,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['mar'],
        viewId: viewIdMap['All Commission Lines'],
        position: 16,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['apr'],
        viewId: viewIdMap['All Commission Lines'],
        position: 17,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['may'],
        viewId: viewIdMap['All Commission Lines'],
        position: 18,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['jun'],
        viewId: viewIdMap['All Commission Lines'],
        position: 19,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['jul'],
        viewId: viewIdMap['All Commission Lines'],
        position: 20,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['aug'],
        viewId: viewIdMap['All Commission Lines'],
        position: 21,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['sep'],
        viewId: viewIdMap['All Commission Lines'],
        position: 22,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['oct'],
        viewId: viewIdMap['All Commission Lines'],
        position: 23,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['nov'],
        viewId: viewIdMap['All Commission Lines'],
        position: 24,
        isVisible: true,
        size: 180,
      },
      {
        fieldMetadataId: objectMetadataMap['commissionLine'].fields['dec'],
        viewId: viewIdMap['All Commission Lines'],
        position: 25,
        isVisible: true,
        size: 180,
      },
    ])
    .execute();
};
