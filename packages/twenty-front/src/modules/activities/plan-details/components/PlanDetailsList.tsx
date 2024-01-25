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
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';
import { useUploadImageMutation } from '~/generated/graphql';
import { FieldMetadataType, FileFolder } from '~/generated-metadata/graphql';
import { isDefined } from '~/utils/isDefined';

const StyledContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 24px;
`;

const StyledDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
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
            <RecordItemDropdownTruncated dropdownTitle={<>{category}</>} defaultOpen>
              <PropertyBox>
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
                {getPlanNameItems.map((section, index) => (
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
                    defaultOpen
                  >
                    <PropertyBoxRow>
                      {['EE', 'ES', 'EF', 'EC'].map((group) => (
                        <RecordItemDropdown
                          dropdownTitle={<>{group}</>}
                          defaultOpen
                        >
                          <PropertyBox>
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
                                    formatFieldMetadataItemAsColumnDefinition({
                                      field: fieldMetadataItem,
                                      position: index,
                                      objectMetadataItem,
                                      showLabel: true,
                                      labelWidth: 60,
                                    }),
                                  useUpdateRecord:
                                    useUpdateOneObjectRecordMutation,
                                  hotkeyScope: InlineCellHotkeyScope.InlineCell,
                                }}
                              >
                                <RecordInlineCell />
                              </FieldContext.Provider>
                            ))}
                          </PropertyBox>
                        </RecordItemDropdown>
                      ))}
                    </PropertyBoxRow>
                  </RecordItemDropdown>
                ))}
              </PropertyBox>
            </RecordItemDropdownTruncated>
          ))}
        </>
      </StyledDropdownContainer>
    </StyledContainer>
  );
};
