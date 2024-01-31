import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Button } from 'tsup.ui.index';

import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { useMedicalPlans } from '@/medical-plan/hooks/useMedicalPlans';
import { MedicalPlan } from '@/medical-plan/types/MedicalPlan';
import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@/object-metadata/states/objectMetadataItemsState';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { formatFieldMetadataItemAsColumnDefinition } from '@/object-metadata/utils/formatFieldMetadataItemAsColumnDefinition';
import { RecordItemDropdown } from '@/object-record/components/record-item-dropdown/components/RecordItemDropdown';
import {
  FieldContext,
  RecordUpdateHook,
  RecordUpdateHookParams,
} from '@/object-record/field/contexts/FieldContext';
import { entityFieldsFamilyState } from '@/object-record/field/states/entityFieldsFamilyState';
import { useCreateOneRecord } from '@/object-record/hooks/useCreateOneRecord';
import { useFindOneRecord } from '@/object-record/hooks/useFindOneRecord';
import { useUpdateOneRecord } from '@/object-record/hooks/useUpdateOneRecord';
import { RecordInlineCell } from '@/object-record/record-inline-cell/components/RecordInlineCell';
import { PropertyBox } from '@/object-record/record-inline-cell/property-box/components/PropertyBox';
import { PropertyBoxRow } from '@/object-record/record-inline-cell/property-box/components/PropertyBoxRow';
import { InlineCellHotkeyScope } from '@/object-record/record-inline-cell/types/InlineCellHotkeyScope';
import { isFieldMetadataItemAvailable } from '@/object-record/utils/isFieldMetadataItemAvailable';
import { IconPlus } from '@/ui/display/icon/index';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';

const StyledSeparator = styled.div`
  background-color: ${({ theme }) => theme.border.color.light};
  height: 1px;
  width: 100%;
`;

const StyledContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 24px;
  margin-top: 12px;
`;

// const StyledGroupContainer = styled.div`
//   align-items: flex-start;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 0px 20px;
// `;

const StyledGroupContainer2 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 10px;
`;

const StyledDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
`;

// const StyledPlanContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing(4)};
//   width: 100%;
// `;

// const StyledPlanRow = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: ${({ theme }) => theme.spacing(4)};
// `;

const StyledPlanColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns per row */
  grid-column-gap: 12px; /* Horizontal gap */
  grid-row-gap: 12px; /* Vertical gap */
  max-width: 80vw; /* Adjust the max-width percentage as needed */
  min-width: 300px; /* Set a minimum width as needed */
  overflow-x: scroll; /* Enable horizontal overflow scrolling */
`;

type PlanDetailsListProps = {
  targetableObject: ActivityTargetableObject;
};

export const PlanDetailsList = ({ targetableObject }: PlanDetailsListProps) => {
  const { objectNameSingular, objectRecordId } = useParams<{
    objectNameSingular: string;
    objectRecordId: string;
  }>();

  if (!objectNameSingular) {
    throw new Error(`Object name is not defined`);
  }

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const {
    objectMetadataItem,
    labelIdentifierFieldMetadata,
    // mapToObjectRecordIdentifier,
  } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { medicalPlans } = useMedicalPlans(targetableObject);

  const { updateOneRecord: updateOneMedicalPlan } =
    useUpdateOneRecord<MedicalPlan>({
      objectNameSingular: CoreObjectNameSingular.MedicalPlan,
    });

  // const { favorites, createFavorite, deleteFavorite } = useFavorites();

  const setEntityFields = useSetRecoilState(
    entityFieldsFamilyState(objectRecordId ?? ''),
  );

  const setMedicalPlanEntityFields = useSetRecoilState(
    entityFieldsFamilyState((medicalPlans[0] as any)?.id ?? ''),
  );

  const { record } = useFindOneRecord({
    objectRecordId,
    objectNameSingular,
  });

  const { record: medicalPlanRecord } = useFindOneRecord({
    objectRecordId: (medicalPlans[0] as any)?.id ?? '',
    objectNameSingular: 'medicalPlan',
  });

  useEffect(() => {
    if (!record) return;
    setEntityFields(record);
    if (!medicalPlanRecord) return;
    setMedicalPlanEntityFields(medicalPlanRecord as any);
  }, [record, setEntityFields, setMedicalPlanEntityFields, medicalPlanRecord]);

  // const [uploadImage] = useUploadImageMutation();
  const { updateOneRecord } = useUpdateOneRecord({ objectNameSingular });

  const useUpdateOneObjectRecordMutation: RecordUpdateHook = () => {
    const updateEntity = ({ variables }: RecordUpdateHookParams) => {
      updateOneRecord?.({
        idToUpdate: variables.where.id as string,
        updateOneRecordInput: variables.updateOneRecordInput,
      });
    };

    return [updateEntity, { loading: false }];
  };

  const useUpdateMedicalPlanObjectRecordMutation: RecordUpdateHook = () => {
    const updateEntity = ({ variables }: RecordUpdateHookParams) => {
      updateOneMedicalPlan?.({
        idToUpdate: variables.where.id as string,
        updateOneRecordInput: variables.updateOneRecordInput,
      });
    };

    return [updateEntity, { loading: false }];
  };

  // const correspondingFavorite = favorites.find(
  //   (favorite) => favorite.recordId === objectRecordId,
  // );

  // const isFavorite = isDefined(correspondingFavorite);

  // const handleFavoriteButtonClick = async () => {
  //   if (!objectNameSingular || !record) return;

  //   if (isFavorite && record) {
  //     deleteFavorite(correspondingFavorite.id);
  //   } else {
  //     createFavorite(record, objectNameSingular);
  //   }
  // };

  // const pageName =
  //   objectNameSingular === 'person'
  //     ? record?.name.firstName + ' ' + record?.name.lastName
  //     : record?.name;

  // const onUploadPicture = async (file: File) => {
  //   if (objectNameSingular !== 'person') {
  //     return;
  //   }

  // const result = await uploadImage({
  //   variables: {
  //     file,
  //     fileFolder: FileFolder.PersonPicture,
  //   },
  // });

  //   const avatarUrl = result?.data?.uploadImage;

  //   if (!avatarUrl) {
  //     return;
  //   }
  //   if (!updateOneRecord) {
  //     return;
  //   }
  //   if (!record) {
  //     return;
  //   }

  //   await updateOneRecord({
  //     idToUpdate: record.id,
  //     updateOneRecordInput: {
  //       avatarUrl,
  //     },
  //   });
  // };

  // const isRelationFieldCardEnabled = useIsFeatureEnabled(
  //   'IS_RELATION_FIELD_CARD_ENABLED',
  // );

  const availableFieldMetadataItems = objectMetadataItem.fields
    .filter(
      (fieldMetadataItem) =>
        isFieldMetadataItemAvailable(fieldMetadataItem) &&
        fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id,
    )
    .sort((fieldMetadataItemA, fieldMetadataItemB) =>
      fieldMetadataItemA.name.localeCompare(fieldMetadataItemB.name),
    );

  const medicalPlanId = availableFieldMetadataItems.find((company) => {
    return company.label === 'Medical_Plan';
  })?.fromRelationMetadata?.toObjectMetadata?.id;

  const medicalPlanMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.id === medicalPlanId,
  );

  const medicalPlanFields = medicalPlanMetadataItem?.fields;

  // const inlineFieldMetadataItems = availableFieldMetadataItems.filter(
  //   (fieldMetadataItem) =>
  //     fieldMetadataItem.type !== FieldMetadataType.Relation ||
  //     (!isRelationFieldCardEnabled &&
  //       parseFieldRelationType(fieldMetadataItem) === 'TO_ONE_OBJECT'),
  // );

  // const medicalPlanMetadataItems = availableFieldMetadataItems.filter(
  //   (fieldMetadataItem) =>
  //     fieldMetadataItem.description?.includes('medical_plan') &&
  //     !fieldMetadataItem.description?.includes('plan_name') &&
  //     !fieldMetadataItem.description?.includes('group_plan'),
  // );

  const { createOneRecord: createOneMedicalPlanRecord } =
    useCreateOneRecord<MedicalPlan>({
      objectNameSingular: CoreObjectNameSingular.MedicalPlan,
    });

  const handleCreateMedicalPlan = async () => {
    await createOneMedicalPlanRecord({
      companyId: objectRecordId,
    });
  };

  const getPlanGroupCategorySpecificItems = (
    plan: any,
    group: any,
    category: any,
  ) => {
    return availableFieldMetadataItems.filter((fieldMetadataItem) => {
      return (
        fieldMetadataItem.description?.includes(`plan_name_${plan + 1}`) &&
        fieldMetadataItem.description?.includes(`${group}_group_plan`) &&
        fieldMetadataItem.description?.includes(
          `${category.toLowerCase()}_plan`,
        )
      );
    });
  };

  //   const getSpecificItemsPlan = (index: any) => {
  //     return availableFieldMetadataItems.filter((fieldMetadataItem) => {
  //       return (
  //         fieldMetadataItem.description?.includes(`plan_name_${index + 1}`) &&
  //         !fieldMetadataItem.description?.includes(`group_plan`)
  //       );
  //     });
  //   };

  return (
    <StyledContainer>
      <StyledDropdownContainer>
        <>
          {['Medical'].map((category) => (
            <RecordItemDropdown
              dropdownTitle={category}
              initialRows={
                <PropertyBox>
                  <StyledPlanColumn>
                    <>
                      {medicalPlans.length > 0 ? (
                        medicalPlanFields &&
                        medicalPlanFields
                          .map((fieldMetadataItem, index) => (
                            <FieldContext.Provider
                              key={
                                (medicalPlans[0] as any).id +
                                fieldMetadataItem.id
                              }
                              value={{
                                entityId: (medicalPlans[0] as any).id ?? '',
                                maxWidth: 272,
                                recoilScopeId:
                                  (medicalPlans[0] as any).id +
                                  fieldMetadataItem.id,
                                isLabelIdentifier: false,
                                fieldDefinition:
                                  formatFieldMetadataItemAsColumnDefinition({
                                    field: fieldMetadataItem,
                                    position: index,
                                    objectMetadataItem,
                                    showLabel: true,
                                    labelWidth: 160,
                                  }),
                                useUpdateRecord:
                                  useUpdateMedicalPlanObjectRecordMutation,
                                hotkeyScope: InlineCellHotkeyScope.InlineCell,
                              }}
                            >
                              <RecordInlineCell />
                            </FieldContext.Provider>
                          ))
                          .slice(0, 4)
                      ) : (
                        <Button
                          Icon={IconPlus}
                          title="Add Medical Plan"
                          variant="secondary"
                          onClick={handleCreateMedicalPlan}
                        />
                      )}
                    </>
                  </StyledPlanColumn>
                </PropertyBox>
              }
            >
              <PropertyBox>
                <StyledPlanColumn>
                  {/* {getCategorySpecificItems(category).map(
                      (fieldMetadataItem, index) => (
                        <FieldContext.Provider
                          key={record?.id + fieldMetadataItem.id}
                          value={{
                            entityId: record?.id ?? '',
                            maxWidth: 272,
                            recoilScopeId: record?.id + fieldMetadataItem.id,
                            isLabelIdentifier: false,
                            fieldDefinition:
                              formatFieldMetadataItemAsColumnDefinition({
                                field: fieldMetadataItem,
                                position: index,
                                objectMetadataItem,
                                showLabel: true,
                                labelWidth: 160,
                              }),
                            useUpdateRecord: useUpdateOneObjectRecordMutation,
                            hotkeyScope: InlineCellHotkeyScope.InlineCell,
                          }}
                        >
                          <RecordInlineCell />
                        </FieldContext.Provider>
                      ),
                    )} */}
                </StyledPlanColumn>

                {medicalPlanFields &&
                  medicalPlanFields.map((section, index) => (
                    <>
                      <StyledSeparator />
                      <RecordItemDropdown
                        dropdownTitle={
                          <FieldContext.Provider
                            key={
                              (medicalPlans[0] as any)?.id ?? '' + section.id
                            }
                            value={{
                              entityId: (medicalPlans[0] as any)?.id ?? '',
                              maxWidth: 272,
                              recoilScopeId:
                                (medicalPlans[0] as any)?.id ?? '' + section.id,
                              isLabelIdentifier: false,
                              fieldDefinition:
                                formatFieldMetadataItemAsColumnDefinition({
                                  field: section,
                                  position: index,
                                  objectMetadataItem,
                                  showLabel: true,
                                  labelWidth: 160,
                                }),
                              useUpdateRecord:
                                useUpdateMedicalPlanObjectRecordMutation,
                              hotkeyScope: InlineCellHotkeyScope.InlineCell,
                            }}
                          >
                            <RecordInlineCell />
                          </FieldContext.Provider>
                        }
                      >
                        <PropertyBoxRow>
                          {['EE', 'ES', 'EF', 'EC'].map((group) => (
                            <>
                              <StyledGroupContainer2>
                                <DropdownMenuHeader>
                                  {group}
                                  {/* ADD MEDICAL/TITLE/DENTAL STUFF HERE */}
                                </DropdownMenuHeader>
                                <DropdownMenuItemsContainer>
                                  {/* {[...availableSortDefinitions]
                            .sort((a, b) => a.label.localeCompare(b.label))
                            .map((availableSortDefinition, index) => (
                              <MenuItem
                                testId={`select-sort-${index}`}
                                key={index}
                                onClick={() => handleAddSort(availableSortDefinition)}
                                LeftIcon={getIcon(availableSortDefinition.iconName)}
                                text={availableSortDefinition.label}
                              />
                            ))} */}
                                  {/* Map properties to cells here */}

                                  {getPlanGroupCategorySpecificItems(
                                    index,
                                    group,
                                    category,
                                  ).map((fieldMetadataItem, index) => (
                                    <FieldContext.Provider
                                      key={record?.id + fieldMetadataItem.id}
                                      value={{
                                        entityId: record?.id ?? '',
                                        maxWidth: 273,
                                        recoilScopeId:
                                          record?.id + fieldMetadataItem.id,
                                        isLabelIdentifier: false,
                                        fieldDefinition:
                                          formatFieldMetadataItemAsColumnDefinition(
                                            {
                                              field: fieldMetadataItem,
                                              position: index,
                                              objectMetadataItem,
                                              showLabel: true,
                                              labelWidth: 60,
                                            },
                                          ),
                                        useUpdateRecord:
                                          useUpdateOneObjectRecordMutation,
                                        hotkeyScope:
                                          InlineCellHotkeyScope.InlineCell,
                                      }}
                                    >
                                      <RecordInlineCell />
                                    </FieldContext.Provider>
                                  ))}
                                </DropdownMenuItemsContainer>
                              </StyledGroupContainer2>
                            </>
                          ))}
                        </PropertyBoxRow>
                      </RecordItemDropdown>
                    </>
                  ))}
              </PropertyBox>
            </RecordItemDropdown>
          ))}
        </>
      </StyledDropdownContainer>
    </StyledContainer>
  );
};
