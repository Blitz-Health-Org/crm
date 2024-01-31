import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

import { useDownloadEmployerReport } from '@/activities/download-employer/utils/downloadReport';
import { AttachmentDropdown } from '@/activities/files/components/AttachmentDropdown';
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
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm}; /* Horizontal gap */
  display: grid; /* Vertical gap */
  gap: ${({ theme }) =>
    theme.spacing(2)}; /* Adjust the max-width percentage as needed */
  grid-column-gap: 12px; /* Set a minimum width as needed */
  grid-row-gap: 12px; /* Enable horizontal overflow scrolling */
  margin-bottom: 12px;
  max-width: 80vw;
  min-width: 300px;
  overflow-x: scroll;
  overflow-y: scroll;
  padding: ${({ theme }) => theme.spacing(3)};
`;

const StyledPropertyBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

export const EmployerInfoPage = () => {
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

  const { record } = useFindOneRecord({
    objectRecordId,
    objectNameSingular,
  });

  useEffect(() => {
    if (!record) return;
    setEntityFields(record);
  }, [record, setEntityFields]);

  const availableFieldMetadataItems = objectMetadataItem.fields;
  // .filter(
  //   (fieldMetadataItem) =>
  //     isFieldMetadataItemAvailable(fieldMetadataItem) &&
  //     fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id,
  // )
  // .filter(
  //   (fieldMetadataItem) =>
  //       displayedEmployerInfoFields.includes(
  //         fieldMetadataItem?.description ?? '',
  //       ),
  // )
  // .sort((fieldMetadataItemA, fieldMetadataItemB) =>
  //   fieldMetadataItemA.name.localeCompare(fieldMetadataItemB.name),
  // );
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

  console.log(
    'availableFieldMetadataItems',
    availableFieldMetadataItems.map((item) => item.label),
  );

  const acceptedLabelList = [
    'Name',
    'Related Accounts',
    'Account Owner',
    'Cobra Eligible',
    'People',
    'State Continutation Eligible',
    'Tax ID',
    'General Agent',
    'Email',
    'Lines of Commission',
  ];

  return (
    <StyledEmployerInfoContainer>
      <StyledContainer>
        <StyledPropertyBox>
          <StyledPlanColumn>
            Employer Summary
            {availableFieldMetadataItems
              .filter((item) => {
                return acceptedLabelList.includes(item.label);
              })
              .sort((fieldMetadataItemA, fieldMetadataItemB) => {
                const posA = acceptedLabelList.findIndex(
                  (label) => label === fieldMetadataItemA.label,
                );
                const posB = acceptedLabelList.findIndex(
                  (label) => label === fieldMetadataItemB.label,
                );
                return posA - posB;
              })
              .map((fieldMetadataItem, index) => (
                <StyledLeftContent>
                  <FieldContext.Provider
                    key={record.id + fieldMetadataItem.id}
                    value={{
                      entityId: record.id,
                      maxWidth: 272,
                      recoilScopeId: record.id + fieldMetadataItem.id,
                      isLabelIdentifier: false,
                      fieldDefinition:
                        formatFieldMetadataItemAsColumnDefinition({
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
              ))
              .slice(0, 10)}
            ...
          </StyledPlanColumn>
        </StyledPropertyBox>
        <StyledRightContent>
          <AttachmentDropdown
            scopeKey={'standin'}
            onDownload={() => {
              useDownloadEmployerReport(availableFieldMetadataItems);
            }}
            allowDelete={false}
          />
        </StyledRightContent>
      </StyledContainer>
    </StyledEmployerInfoContainer>
  );
};
