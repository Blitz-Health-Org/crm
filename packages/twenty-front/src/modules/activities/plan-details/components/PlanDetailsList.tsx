import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { useFavorites } from '@/favorites/hooks/useFavorites';
import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { formatFieldMetadataItemAsColumnDefinition } from '@/object-metadata/utils/formatFieldMetadataItemAsColumnDefinition';
import { parseFieldRelationType } from '@/object-metadata/utils/parseFieldRelationType';
import { RecordItemDropdown } from '@/object-record/components/record-item-dropdown/components/RecordItemDropdown';
import { RecordItemDropdownTruncated } from '@/object-record/components/record-item-dropdown/components/RecordItemDropdownTruncated';
import {
  FieldContext,
  RecordUpdateHook,
  RecordUpdateHookParams,
} from '@/object-record/field/contexts/FieldContext';
import { entityFieldsFamilyState } from '@/object-record/field/states/entityFieldsFamilyState';
import { useFindOneRecord } from '@/object-record/hooks/useFindOneRecord';
import { useUpdateOneRecord } from '@/object-record/hooks/useUpdateOneRecord';
import { RecordInlineCell } from '@/object-record/record-inline-cell/components/RecordInlineCell';
import { PropertyBox } from '@/object-record/record-inline-cell/property-box/components/PropertyBox';
import { PropertyBoxRow } from '@/object-record/record-inline-cell/property-box/components/PropertyBoxRow';
import { InlineCellHotkeyScope } from '@/object-record/record-inline-cell/types/InlineCellHotkeyScope';
import { isFieldMetadataItemAvailable } from '@/object-record/utils/isFieldMetadataItemAvailable';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';
import { useUploadImageMutation } from '~/generated/graphql';
import { FieldMetadataType, FileFolder } from '~/generated-metadata/graphql';
import { isDefined } from '~/utils/isDefined';

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
`;

const StyledGroupContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 20px;
`;

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

const StyledPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`;

const StyledPlanRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const StyledPlanColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns per row */
  grid-column-gap: 56px; /* Horizontal gap */
  grid-row-gap: 12px; /* Vertical gap */
  max-width: 300px; /* Adjust the max-width as needed */
`;

export const PlanDetailsList = () => {
  const { objectNameSingular, objectRecordId } = useParams<{
    objectNameSingular: string;
    objectRecordId: string;
  }>();

  if (!objectNameSingular) {
    throw new Error(`Object name is not defined`);
  }

  const {
    objectMetadataItem,
    labelIdentifierFieldMetadata,
    mapToObjectRecordIdentifier,
  } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { favorites, createFavorite, deleteFavorite } = useFavorites();

  const setEntityFields = useSetRecoilState(
    entityFieldsFamilyState(objectRecordId ?? ''),
  );

  const { record, loading } = useFindOneRecord({
    objectRecordId,
    objectNameSingular,
  });

  useEffect(() => {
    if (!record) return;
    setEntityFields(record);
  }, [record, setEntityFields]);

  const [uploadImage] = useUploadImageMutation();
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

  const correspondingFavorite = favorites.find(
    (favorite) => favorite.recordId === objectRecordId,
  );

  const isFavorite = isDefined(correspondingFavorite);

  const handleFavoriteButtonClick = async () => {
    if (!objectNameSingular || !record) return;

    if (isFavorite && record) {
      deleteFavorite(correspondingFavorite.id);
    } else {
      createFavorite(record, objectNameSingular);
    }
  };

  const pageName =
    objectNameSingular === 'person'
      ? record?.name.firstName + ' ' + record?.name.lastName
      : record?.name;

  const onUploadPicture = async (file: File) => {
    if (objectNameSingular !== 'person') {
      return;
    }

    const result = await uploadImage({
      variables: {
        file,
        fileFolder: FileFolder.PersonPicture,
      },
    });

    const avatarUrl = result?.data?.uploadImage;

    if (!avatarUrl) {
      return;
    }
    if (!updateOneRecord) {
      return;
    }
    if (!record) {
      return;
    }

    await updateOneRecord({
      idToUpdate: record.id,
      updateOneRecordInput: {
        avatarUrl,
      },
    });
  };

  const isRelationFieldCardEnabled = useIsFeatureEnabled(
    'IS_RELATION_FIELD_CARD_ENABLED',
  );

  const availableFieldMetadataItems = objectMetadataItem.fields
    .filter(
      (fieldMetadataItem) =>
        isFieldMetadataItemAvailable(fieldMetadataItem) &&
        fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id,
    )
    .sort((fieldMetadataItemA, fieldMetadataItemB) =>
      fieldMetadataItemA.name.localeCompare(fieldMetadataItemB.name),
    );

  const inlineFieldMetadataItems = availableFieldMetadataItems.filter(
    (fieldMetadataItem) =>
      fieldMetadataItem.type !== FieldMetadataType.Relation ||
      (!isRelationFieldCardEnabled &&
        parseFieldRelationType(fieldMetadataItem) === 'TO_ONE_OBJECT'),
  );

  const medicalPlanMetadataItems = availableFieldMetadataItems.filter(
    (fieldMetadataItem) =>
      fieldMetadataItem.description?.includes('medical_plan') &&
      !fieldMetadataItem.description?.includes('plan_name') &&
      !fieldMetadataItem.description?.includes('group_plan'),
  );

  const getPlanNameItems = availableFieldMetadataItems.filter(
    (fieldMetadataItem) => {
      return fieldMetadataItem.label === 'Plan Name';
    },
  );

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

  const getCategorySpecificItems = (category: any) => {
    return availableFieldMetadataItems.filter((fieldMetadataItem) => {
      return (
        fieldMetadataItem.description?.includes(
          `${category.toLowerCase()}_plan`,
        ) &&
        !fieldMetadataItem.description?.includes(`group_plan`) &&
        !fieldMetadataItem.description?.includes(`plan_name`)
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
          {['Medical', 'Dental', 'Vision'].map((category) => (
          <PropertyBox>
           <RecordItemDropdownTruncated dropdownTitle={<>{category}</>} defaultOpen 
            initialRows =  {
              <PropertyBox>
            <StyledPlanColumn>
            <>
            {getCategorySpecificItems(category).map(
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
            ).slice(0,4)}</>
              </StyledPlanColumn>
              </PropertyBox>
            }>
              <PropertyBox>
              <StyledPlanColumn>
                {getCategorySpecificItems(category).map(
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
                )}
                </StyledPlanColumn>

                {getPlanNameItems.map((section, index) => (
                  <>
                    <StyledSeparator />
                    <RecordItemDropdown
                    
                      dropdownTitle={
                        <FieldContext.Provider
                          key={record?.id + section.id}
                          value={{
                            entityId: record?.id ?? '',
                            maxWidth: 272,
                            recoilScopeId: record?.id + section.id,
                            isLabelIdentifier: false,
                            fieldDefinition:
                              formatFieldMetadataItemAsColumnDefinition({
                                field: section,
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
            </RecordItemDropdownTruncated>
            </PropertyBox>
          ))}
        </>
      </StyledDropdownContainer>
    </StyledContainer>
  );
};
