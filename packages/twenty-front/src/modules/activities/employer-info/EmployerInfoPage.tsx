import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

import { downloadEmployerReport } from '@/activities/download-employer/utils/downloadReport';
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
import { InlineCellHotkeyScope } from '@/object-record/record-inline-cell/types/InlineCellHotkeyScope';
import { isFieldMetadataItemAvailable } from '@/object-record/utils/isFieldMetadataItemAvailable';

const StyledEmployerInfoContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  overflow-y: scroll;
`;

const StyledContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px; /* Adjust the margin as needed */
  overflow-y: scroll;
`;

const StyledPlanColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns per row */
  grid-column-gap: 12px; /* Horizontal gap */
  grid-row-gap: 12px; /* Vertical gap */
  max-width: 80vw; /* Adjust the max-width percentage as needed */
  min-width: 300px; /* Set a minimum width as needed */
  overflow-x: scroll; /* Enable horizontal overflow scrolling */
  overflow-y: scroll;
`;

const StyledPropertyBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  flex-grow: 1;
  overflow-y: scroll;
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
  margin-left: 6px;
  position: sticky;
  top: 0; // Adjust the top value as needed
  z-index: 100; // Adjust the z-index as needed
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
    .filter(
      (fieldMetadataItem) =>
        //   displayedEmployerInfoFields.includes(
        //     fieldMetadataItem?.description ?? '',
        //   ),
        true,
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
    <StyledEmployerInfoContainer>
      <StyledContainer>
        <StyledPropertyBox>
          <StyledPlanColumn>
          {availableFieldMetadataItems.map((fieldMetadataItem, index) => (
            <StyledLeftContent>
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
            </StyledLeftContent>
          ))}
        </StyledPlanColumn>
        </StyledPropertyBox>
        <StyledRightContent>
          <AttachmentDropdown
            scopeKey={'standin'}
            onDownload={() => {
              downloadEmployerReport(availableFieldMetadataItems);
            }}
            allowDelete={false}
          />
        </StyledRightContent>
      </StyledContainer>
    </StyledEmployerInfoContainer>
  );
};
