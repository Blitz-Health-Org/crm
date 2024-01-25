import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

import { displayedEmployerInfoFields } from '@/activities/employer-info/constants/contants';
import { AttachmentDropdown } from '@/activities/files/components/AttachmentDropdown';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { formatFieldMetadataItemAsColumnDefinition } from '@/object-metadata/utils/formatFieldMetadataItemAsColumnDefinition';
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
import { InlineCellHotkeyScope } from '@/object-record/record-inline-cell/types/InlineCellHotkeyScope';
import { isFieldMetadataItemAvailable } from '@/object-record/utils/isFieldMetadataItemAvailable';

const StyledContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 24px;
`;

// const StyledRow = styled.div`
//   align-items: center;
//   align-self: stretch;
//   border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
//   color: ${({ theme }) => theme.font.color.primary};
//   display: flex;
//   justify-content: space-between;

//   padding: ${({ theme }) => theme.spacing(2)};
// `;

const StyledLeftContent = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const StyledRightContent = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

type EmployerInfoPageProps = {
  targetableObject: ActivityTargetableObject;
};

export const EmployerInfoPage = (props: EmployerInfoPageProps) => {
  const { objectNameSingular, objectRecordId } = useParams<{
    objectNameSingular: string;
    objectRecordId: string;
  }>();

  if (!objectNameSingular) {
    throw new Error(`Object name is not defined`);
  }

  const { objectMetadataItem, labelIdentifierFieldMetadata } =
    useObjectMetadataItem({
      objectNameSingular,
    });

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

  const availableFieldMetadataItems = objectMetadataItem.fields //TODO: filter properly for fields we want to display
    .filter(
      (fieldMetadataItem) =>
        isFieldMetadataItemAvailable(fieldMetadataItem) &&
        fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id,
    )
    .filter((fieldMetadataItem) =>
      displayedEmployerInfoFields.includes(
        fieldMetadataItem?.description ?? '',
      ),
    )
    .sort((fieldMetadataItemA, fieldMetadataItemB) =>
      fieldMetadataItemA.name.localeCompare(fieldMetadataItemB.name),
    );
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

  if (!record) {
    return;
  }

  return (
    <StyledContainer>
      <PropertyBox>
        <StyledLeftContent>
          {availableFieldMetadataItems.map((fieldMetadataItem, index) => (
            <FieldContext.Provider
              key={record.id + fieldMetadataItem.id}
              value={{
                entityId: record.id,
                maxWidth: 272,
                recoilScopeId: record.id + fieldMetadataItem.id,
                isLabelIdentifier: false,
                fieldDefinition: formatFieldMetadataItemAsColumnDefinition({
                  field: fieldMetadataItem,
                  position: index,
                  objectMetadataItem,
                  showLabel: true,
                  labelWidth: 90,
                }),
                useUpdateRecord: useUpdateOneObjectRecordMutation,
                hotkeyScope: InlineCellHotkeyScope.InlineCell,
              }}
            >
              <RecordInlineCell />
            </FieldContext.Provider>
          ))}
        </StyledLeftContent>
        <StyledRightContent>
          <AttachmentDropdown
            scopeKey={'standin'}
            onDownload={() => {}}
            allowDelete={false}
          />
        </StyledRightContent>
      </PropertyBox>
    </StyledContainer>
  );
};
