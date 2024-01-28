import { useContext } from 'react';
import { useInView } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { isLabelIdentifierField } from '@/object-metadata/utils/isLabelIdentifierField';
import { CommissionLineRowIdContext } from '@/object-record/commission-sheet/contexts/CommissionRowIdContext';
import { FieldContext } from '@/object-record/field/contexts/FieldContext';
import { TextFieldDisplay } from '@/object-record/field/meta-types/display/components/TextFieldDisplay';
import { isFieldRelation } from '@/object-record/field/types/guards/isFieldRelation';
import { CheckboxCell } from '@/object-record/record-table/components/CheckboxCell';
import { RecordTableCellContainer } from '@/object-record/record-table/components/RecordTableCellContainer';
import { StyledRow } from '@/object-record/record-table/components/RecordTableRow';
import { ColumnContext } from '@/object-record/record-table/contexts/ColumnContext';
import { ColumnIndexContext } from '@/object-record/record-table/contexts/ColumnIndexContext';
import { RecordUpdateContext } from '@/object-record/record-table/contexts/EntityUpdateMutationHookContext';
import { useRecordTableStates } from '@/object-record/record-table/hooks/internal/useRecordTableStates';
import { useCurrentRowSelected } from '@/object-record/record-table/record-table-row/hooks/useCurrentRowSelected';
import { TableHotkeyScope } from '@/object-record/record-table/types/TableHotkeyScope';
import { RelationPickerHotkeyScope } from '@/object-record/relation-picker/types/RelationPickerHotkeyScope';
import { ScrollWrapperContext } from '@/ui/utilities/scroll/components/ScrollWrapper';

export const CommissionLineRow = ({ rowId }: { rowId: string }) => {
  //   const setContextMenuPosition = useSetRecoilState(contextMenuPositionState);
  //   const setContextMenuOpenState = useSetRecoilState(contextMenuIsOpenState);
  const currentRowId = useContext(CommissionLineRowIdContext);

  //   const { setCurrentRowSelected } = useCurrentRowSelected(); //handle selection later

  //   const handleContextMenu = (event: React.MouseEvent) => {
  //     event.preventDefault();
  //     setCurrentRowSelected(true);
  //     setContextMenuPosition({
  //       x: event.clientX,
  //       y: event.clientY,
  //     });
  //     setContextMenuOpenState(true);
  //   };

  const columnDefinition = useContext(ColumnContext);

  const { basePathToShowPage, objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular:
      columnDefinition?.metadata.objectMetadataNameSingular || '',
  });

  const updateRecord = useContext(RecordUpdateContext);

  if (!columnDefinition || !currentRowId) {
    return null;
  }

  const customHotkeyScope = isFieldRelation(columnDefinition)
    ? RelationPickerHotkeyScope.RelationPicker
    : TableHotkeyScope.CellEditMode;

  return (
    <>
      <ColumnIndexContext.Provider value={cellIndex}>
        <td onContextMenu={(event) => handleContextMenu(event)}>
          <FieldContext.Provider
            value={{
              recoilScopeId: currentRowId + columnDefinition.label,
              entityId: currentRowId,
              fieldDefinition: columnDefinition,
              useUpdateRecord: () => [updateRecord, {}],
              hotkeyScope: customHotkeyScope,
              basePathToShowPage,
              isLabelIdentifier: isLabelIdentifierField({
                fieldMetadataItem: {
                  id: columnDefinition.fieldMetadataId,
                  name: columnDefinition.metadata.fieldName,
                },
                objectMetadataItem,
              }),
            }}
          >
            <TextFieldDisplay />
          </FieldContext.Provider>
        </td>
      </ColumnIndexContext.Provider>
    </>
  );
};

export const RecordTableRow = ({ rowId }: { rowId: string }) => {
  const { visibleTableColumnsSelector } = useRecordTableStates();

  const visibleTableColumns = useRecoilValue(visibleTableColumnsSelector);

  const { currentRowSelected } = useCurrentRowSelected();

  const scrollWrapperRef = useContext(ScrollWrapperContext);

  const { ref: elementRef, inView } = useInView({
    root: scrollWrapperRef.current,
    rootMargin: '1000px',
  });

  return (
    <StyledRow
      ref={elementRef}
      data-testid={`row-id-${rowId}`}
      selected={currentRowSelected}
      data-selectable-id={rowId}
    >
      {inView ? (
        <>
          <td>
            <CheckboxCell />
          </td>
          {[...visibleTableColumns]
            .sort((columnA, columnB) => columnA.position - columnB.position)
            .map((column, columnIndex) => {
              return (
                <ColumnContext.Provider
                  value={column}
                  key={column.fieldMetadataId}
                >
                  <RecordTableCellContainer cellIndex={columnIndex} />
                </ColumnContext.Provider>
              );
            })}
          <td></td>
        </>
      ) : (
        <StyledPlaceholder />
      )}
    </StyledRow>
  );
};
