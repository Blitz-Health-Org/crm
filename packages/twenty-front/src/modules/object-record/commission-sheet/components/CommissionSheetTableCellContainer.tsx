import { useContext } from 'react';

import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { isLabelIdentifierField } from '@/object-metadata/utils/isLabelIdentifierField';
import { CommissionLineRowIdContext } from '@/object-record/commission-sheet/contexts/CommissionRowIdContext';
import { FieldContext } from '@/object-record/field/contexts/FieldContext';
import { TextFieldDisplay } from '@/object-record/field/meta-types/display/components/TextFieldDisplay';
import { isFieldRelation } from '@/object-record/field/types/guards/isFieldRelation';
import { ColumnContext } from '@/object-record/record-table/contexts/ColumnContext';
import { ColumnIndexContext } from '@/object-record/record-table/contexts/ColumnIndexContext';
import { RecordUpdateContext } from '@/object-record/record-table/contexts/EntityUpdateMutationHookContext';
import { TableHotkeyScope } from '@/object-record/record-table/types/TableHotkeyScope';
import { RelationPickerHotkeyScope } from '@/object-record/relation-picker/types/RelationPickerHotkeyScope';

export const CommissionSheetTableCellContainer = ({
  cellIndex,
}: {
  cellIndex: number;
}) => {
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
        <td
          onContextMenu={
            () => {}
            // (event) => handleContextMenu(event)
          }
        >
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
