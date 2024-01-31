import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Button } from 'tsup.ui.index';

import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { useDentalPlans } from '@/medical-plan/hooks/useDentalPlan';
import { useMedicalPlans } from '@/medical-plan/hooks/useMedicalPlans';
import { useVisionPlans } from '@/medical-plan/hooks/useVisionPlans';
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
import { entityFieldsMultipleFamilySelector } from '@/object-record/field/states/selectors/entityFieldsMultipleFamilySelector';
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
  margin-bottom: 5px;
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

  const { medicalPlans } = useMedicalPlans(
    targetableObject,
    objectRecordId ?? '',
  );
  const { dentalPlans } = useDentalPlans(
    targetableObject,
    objectRecordId ?? '',
  );

  const { visionPlans } = useVisionPlans(
    targetableObject,
    objectRecordId ?? '',
  );

  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const {
    objectMetadataItem,
    labelIdentifierFieldMetadata,
    // mapToObjectRecordIdentifier,
  } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { updateOneRecord: updateOneMedicalPlan } =
    useUpdateOneRecord<MedicalPlan>({
      objectNameSingular: CoreObjectNameSingular.MedicalPlan,
    });

  const { updateOneRecord: updateOneDentalPlan } =
    useUpdateOneRecord<MedicalPlan>({
      objectNameSingular: CoreObjectNameSingular.DentalPlan,
    });

  const { updateOneRecord: updateOneVisionPlan } =
    useUpdateOneRecord<MedicalPlan>({
      objectNameSingular: CoreObjectNameSingular.VisionPlan,
    });

  // const { favorites, createFavorite, deleteFavorite } = useFavorites();

  const setEntityFields = useSetRecoilState(
    entityFieldsFamilyState(objectRecordId ?? ''),
  );

  const [getPlans, setPlans] = useRecoilState(
    entityFieldsMultipleFamilySelector({
      medicalPlans,
    }),
  );

  const { record } = useFindOneRecord({
    objectRecordId,
    objectNameSingular,
  });

  useEffect(() => {
    if (!record) return;
    setEntityFields(record);
    if (!medicalPlans.length) return;
    setPlans(medicalPlans as any);
    console.log('CHECKCHECK', medicalPlans);
  }, [record, setEntityFields, setPlans, medicalPlans]);

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

  const useUpdateDentalPlanObjectRecordMutation: RecordUpdateHook = () => {
    const updateEntity = ({ variables }: RecordUpdateHookParams) => {
      updateOneDentalPlan?.({
        idToUpdate: variables.where.id as string,
        updateOneRecordInput: variables.updateOneRecordInput,
      });
    };

    return [updateEntity, { loading: false }];
  };

  const useUpdateVisionPlanObjectRecordMutation: RecordUpdateHook = () => {
    const updateEntity = ({ variables }: RecordUpdateHookParams) => {
      updateOneVisionPlan?.({
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
    return company.label === 'Medical Plan';
  })?.fromRelationMetadata?.toObjectMetadata?.id;

  const medicalPlanMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.id === medicalPlanId,
  );

  const medicalPlanFields = medicalPlanMetadataItem?.fields.filter(
    (fieldMetadataItem) =>
      isFieldMetadataItemAvailable(fieldMetadataItem) &&
      fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id &&
      fieldMetadataItem.type !== 'RELATION',
  );

  const dentalPlanId = availableFieldMetadataItems.find((company) => {
    return company.label === 'Dental Plan';
  })?.fromRelationMetadata?.toObjectMetadata?.id;

  const dentalPlanMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.id === dentalPlanId,
  );

  const dentalPlanFields = dentalPlanMetadataItem?.fields.filter(
    (fieldMetadataItem) =>
      isFieldMetadataItemAvailable(fieldMetadataItem) &&
      fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id &&
      fieldMetadataItem.type !== 'RELATION',
  );

  const visionPlanId = availableFieldMetadataItems.find((company) => {
    return company.label === 'Vision Plan';
  })?.fromRelationMetadata?.toObjectMetadata?.id;

  const visionPlanMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.id === visionPlanId,
  );

  const visionPlanFields = visionPlanMetadataItem?.fields.filter(
    (fieldMetadataItem) =>
      isFieldMetadataItemAvailable(fieldMetadataItem) &&
      fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id &&
      fieldMetadataItem.type !== 'RELATION',
  );

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

  const { createOneRecord: createOneDentalPlanRecord } =
    useCreateOneRecord<MedicalPlan>({
      objectNameSingular: CoreObjectNameSingular.DentalPlan,
    });

  const { createOneRecord: createOneVisionPlanRecord } =
    useCreateOneRecord<MedicalPlan>({
      objectNameSingular: CoreObjectNameSingular.VisionPlan,
    });

  const handleCreateMedicalPlan = async () => {
    await createOneMedicalPlanRecord({
      companyId: objectRecordId,
    });
  };

  const handleCreateDentalPlan = async () => {
    await createOneDentalPlanRecord({
      companyId: objectRecordId,
    });
  };

  const handleCreateVisionPlan = async () => {
    await createOneVisionPlanRecord({
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

  console.log(
    'available',
    availableFieldMetadataItems.filter(
      (x) => x.description?.includes('dental'),
    ),
  );
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
                        medicalPlans.map(
                          (medicalPlan) =>
                            medicalPlanFields &&
                            medicalPlanFields
                              .map((fieldMetadataItem, index) => (
                                <FieldContext.Provider
                                  key={
                                    (medicalPlan as any).id +
                                    fieldMetadataItem.id
                                  }
                                  value={{
                                    entityId: (medicalPlan as any).id ?? '',
                                    maxWidth: 272,
                                    recoilScopeId:
                                      (medicalPlan as any).id +
                                      fieldMetadataItem.id,
                                    isLabelIdentifier: false,
                                    fieldDefinition:
                                      formatFieldMetadataItemAsColumnDefinition(
                                        {
                                          field: fieldMetadataItem,
                                          position: index,
                                          objectMetadataItem,
                                          showLabel: true,
                                          labelWidth: 160,
                                        },
                                      ),
                                    useUpdateRecord:
                                      useUpdateMedicalPlanObjectRecordMutation,
                                    hotkeyScope:
                                      InlineCellHotkeyScope.InlineCell,
                                  }}
                                >
                                  <RecordInlineCell />
                                </FieldContext.Provider>
                              ))
                              .slice(0, 4),
                        )
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
              <StyledPlanColumn>
                {availableFieldMetadataItems
                  .filter((field) => {
                    return field.description?.includes('medical_plan');
                  })
                  .map((fieldMetadataItem, index) => (
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
                        useUpdateRecord:
                          useUpdateMedicalPlanObjectRecordMutation,
                        hotkeyScope: InlineCellHotkeyScope.InlineCell,
                      }}
                    >
                      <RecordInlineCell />
                    </FieldContext.Provider>
                  ))}
              </StyledPlanColumn>

              {medicalPlans.map(
                (medicalPlan) =>
                  medicalPlanFields &&
                  medicalPlanFields
                    .filter((field) => {
                      return field.label === 'Plan Name';
                    })
                    .map((section, index) => (
                      <>
                        <StyledSeparator />
                        <RecordItemDropdown
                          dropdownTitle={
                            <FieldContext.Provider
                              key={(medicalPlan as any)?.id ?? '' + section.id}
                              value={{
                                entityId: (medicalPlan as any)?.id ?? '',
                                maxWidth: 272,
                                recoilScopeId:
                                  (medicalPlan as any)?.id ?? '' + section.id,
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
                              {/* <RecordInlineCell /> */}
                              New Plan
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

                                    {medicalPlanFields
                                      .filter((field) => {
                                        return field.description?.includes(
                                          group,
                                        );
                                      })
                                      .map((fieldMetadataItem, index) => (
                                        <FieldContext.Provider
                                          key={
                                            (medicalPlan as any)?.id +
                                            fieldMetadataItem.id
                                          }
                                          value={{
                                            entityId:
                                              (medicalPlan as any)?.id ?? '',
                                            maxWidth: 273,
                                            recoilScopeId:
                                              (medicalPlan as any)?.id +
                                              fieldMetadataItem.id,
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
                                              useUpdateMedicalPlanObjectRecordMutation,
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
                    )),
              )}

              <Button
                Icon={IconPlus}
                title="Add Medical Plan"
                variant="secondary"
                onClick={handleCreateMedicalPlan}
              />
            </RecordItemDropdown>
          ))}
          <RecordItemDropdown
            dropdownTitle={'Dental'}
            initialRows={
              <PropertyBox>
                <StyledPlanColumn>
                  <>
                    {dentalPlans.length > 0 ? (
                      dentalPlans.map(
                        (dentalPlan) =>
                          dentalPlanFields &&
                          dentalPlanFields
                            .map((fieldMetadataItem, index) => (
                              <FieldContext.Provider
                                key={
                                  (dentalPlan as any).id + fieldMetadataItem.id
                                }
                                value={{
                                  entityId: (dentalPlan as any).id ?? '',
                                  maxWidth: 272,
                                  recoilScopeId:
                                    (dentalPlan as any).id +
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
                                    useUpdateDentalPlanObjectRecordMutation,
                                  hotkeyScope: InlineCellHotkeyScope.InlineCell,
                                }}
                              >
                                <RecordInlineCell />
                              </FieldContext.Provider>
                            ))
                            .slice(0, 4),
                      )
                    ) : (
                      <Button
                        Icon={IconPlus}
                        title="Add Dental Plan"
                        variant="secondary"
                        onClick={handleCreateDentalPlan}
                      />
                    )}
                  </>
                </StyledPlanColumn>
              </PropertyBox>
            }
          >
            <StyledPlanColumn>
              {availableFieldMetadataItems
                .filter((field) => {
                  return field.description?.includes('dental_plan');
                })
                .map((fieldMetadataItem, index) => (
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
                      useUpdateRecord: useUpdateMedicalPlanObjectRecordMutation,
                      hotkeyScope: InlineCellHotkeyScope.InlineCell,
                    }}
                  >
                    <RecordInlineCell />
                  </FieldContext.Provider>
                ))}
            </StyledPlanColumn>

            {dentalPlans.map(
              (dentalPlan) =>
                dentalPlanFields &&
                dentalPlanFields
                  .filter((field) => {
                    return field.label === 'Plan Name';
                  })
                  .map((section, index) => (
                    <>
                      <StyledSeparator />
                      <RecordItemDropdown
                        dropdownTitle={
                          <FieldContext.Provider
                            key={(dentalPlan as any)?.id ?? '' + section.id}
                            value={{
                              entityId: (dentalPlan as any)?.id ?? '',
                              maxWidth: 272,
                              recoilScopeId:
                                (dentalPlan as any)?.id ?? '' + section.id,
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
                                useUpdateDentalPlanObjectRecordMutation,
                              hotkeyScope: InlineCellHotkeyScope.InlineCell,
                            }}
                          >
                            {/* <RecordInlineCell /> */}
                            New Plan
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

                                  {dentalPlanFields
                                    .filter((field) => {
                                      return field.description?.includes(group);
                                    })
                                    .map((fieldMetadataItem, index) => (
                                      <FieldContext.Provider
                                        key={
                                          (dentalPlan as any)?.id +
                                          fieldMetadataItem.id
                                        }
                                        value={{
                                          entityId:
                                            (dentalPlan as any)?.id ?? '',
                                          maxWidth: 273,
                                          recoilScopeId:
                                            (dentalPlan as any)?.id +
                                            fieldMetadataItem.id,
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
                                            useUpdateDentalPlanObjectRecordMutation,
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
                  )),
            )}

            <Button
              Icon={IconPlus}
              title="Add Dental Plan"
              variant="secondary"
              onClick={handleCreateDentalPlan}
            />
          </RecordItemDropdown>

          <RecordItemDropdown
            dropdownTitle={'Vision'}
            initialRows={
              <PropertyBox>
                <StyledPlanColumn>
                  <>
                    {visionPlans.length > 0 ? (
                      visionPlans.map(
                        (visionPlan) =>
                          visionPlanFields &&
                          visionPlanFields
                            .map((fieldMetadataItem, index) => (
                              <FieldContext.Provider
                                key={
                                  (visionPlan as any).id + fieldMetadataItem.id
                                }
                                value={{
                                  entityId: (visionPlan as any).id ?? '',
                                  maxWidth: 272,
                                  recoilScopeId:
                                    (visionPlan as any).id +
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
                                    useUpdateVisionPlanObjectRecordMutation,
                                  hotkeyScope: InlineCellHotkeyScope.InlineCell,
                                }}
                              >
                                <RecordInlineCell />
                              </FieldContext.Provider>
                            ))
                            .slice(0, 4),
                      )
                    ) : (
                      <Button
                        Icon={IconPlus}
                        title="Add Vision Plan"
                        variant="secondary"
                        onClick={handleCreateVisionPlan}
                      />
                    )}
                  </>
                </StyledPlanColumn>
              </PropertyBox>
            }
          >
            <StyledPlanColumn>
              {availableFieldMetadataItems
                .filter((field) => {
                  return field.description?.includes('vision_plan');
                })
                .map((fieldMetadataItem, index) => (
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
                      useUpdateRecord: useUpdateMedicalPlanObjectRecordMutation,
                      hotkeyScope: InlineCellHotkeyScope.InlineCell,
                    }}
                  >
                    <RecordInlineCell />
                  </FieldContext.Provider>
                ))}
            </StyledPlanColumn>

            {visionPlans.map(
              (visionPlan) =>
                visionPlanFields &&
                visionPlanFields
                  .filter((field) => {
                    return field.label === 'Plan Name';
                  })
                  .map((section, index) => (
                    <>
                      <StyledSeparator />
                      <RecordItemDropdown
                        dropdownTitle={
                          <FieldContext.Provider
                            key={(visionPlan as any)?.id ?? '' + section.id}
                            value={{
                              entityId: (visionPlan as any)?.id ?? '',
                              maxWidth: 272,
                              recoilScopeId:
                                (visionPlan as any)?.id ?? '' + section.id,
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
                                useUpdateVisionPlanObjectRecordMutation,
                              hotkeyScope: InlineCellHotkeyScope.InlineCell,
                            }}
                          >
                            {/* <RecordInlineCell /> */}
                            New Plan
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

                                  {visionPlanFields
                                    .filter((field) => {
                                      return field.description?.includes(group);
                                    })
                                    .map((fieldMetadataItem, index) => (
                                      <FieldContext.Provider
                                        key={
                                          (visionPlan as any)?.id +
                                          fieldMetadataItem.id
                                        }
                                        value={{
                                          entityId:
                                            (visionPlan as any)?.id ?? '',
                                          maxWidth: 273,
                                          recoilScopeId:
                                            (visionPlan as any)?.id +
                                            fieldMetadataItem.id,
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
                                            useUpdateVisionPlanObjectRecordMutation,
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
                  )),
            )}

            <Button
              Icon={IconPlus}
              title="Add Vision Plan"
              variant="secondary"
              onClick={handleCreateVisionPlan}
            />
          </RecordItemDropdown>
        </>
      </StyledDropdownContainer>
    </StyledContainer>
  );
};
