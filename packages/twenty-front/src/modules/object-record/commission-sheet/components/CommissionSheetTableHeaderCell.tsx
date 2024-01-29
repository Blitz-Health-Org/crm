import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LightIconButton } from 'tsup.ui.index';

import { useCommissionSheetScopedStates } from '@/object-record/commission-sheet/hooks/useCommissionSheetScopedStates';
import { ColumnDefinition } from '@/object-record/commission-sheet/types/ColumnDefinition';
import { FieldMetadata } from '@/object-record/field/types/FieldMetadata';
import { ColumnHeadWithDropdown } from '@/object-record/record-table/components/ColumnHeadWithDropdown';
import { IconPlus } from '@/ui/display/icon';

export const CommissionSheetTableHeaderCell = ({
  column,
}: {
  column: ColumnDefinition<FieldMetadata>;
}) => {
  //   return <>stuff</>;
  // };

  const {
    // getResizeFieldOffsetState,
    // getTableColumnsState,
    // tableColumnsByKeySelector,
    // visibleTableColumnsSelector,
    getAvailableTableColumnsState,
  } = useCommissionSheetScopedStates();

  //   const [resizeFieldOffset, setResizeFieldOffset] = useRecoilState(
  //     getResizeFieldOffsetState(),
  //   );

  const tableColumns = useRecoilValue(getAvailableTableColumnsState());
  //   const tableColumnsByKey = useRecoilValue(tableColumnsByKeySelector);
  //   const visibleTableColumns = useRecoilValue(visibleTableColumnsSelector);

  const [initialPointerPositionX, setInitialPointerPositionX] = useState<
    number | null
  >(null);
  const [resizedFieldKey, setResizedFieldKey] = useState<string | null>(null);

  //   const { handleColumnsChange } = useTableColumns();

  const handleResizeHandlerStart = useCallback((positionX: number) => {
    setInitialPointerPositionX(positionX);
  }, []);

  const [iconVisibility, setIconVisibility] = useState(false);

  const primaryColumn = tableColumns.find((column) => column.position === 0);

  //   const handleResizeHandlerMove = useCallback(
  //     (positionX: number) => {
  //       if (!initialPointerPositionX) return;
  //       setResizeFieldOffset(positionX - initialPointerPositionX);
  //     },
  //     [setResizeFieldOffset, initialPointerPositionX],
  //   );

  //   const handleResizeHandlerEnd = useRecoilCallback(
  //     ({ snapshot, set }) =>
  //       async () => {
  //         if (!resizedFieldKey) return;

  //         const resizeFieldOffset = getSnapshotValue(
  //           snapshot,
  //           getResizeFieldOffsetState(),
  //         );

  //         const nextWidth = Math.round(
  //           Math.max(
  //             tableColumnsByKey[resizedFieldKey].size + resizeFieldOffset,
  //             COLUMN_MIN_WIDTH,
  //           ),
  //         );

  //         set(getResizeFieldOffsetState(), 0);
  //         setInitialPointerPositionX(null);
  //         setResizedFieldKey(null);

  //         if (nextWidth !== tableColumnsByKey[resizedFieldKey].size) {
  //           const nextColumns = tableColumns.map((column) =>
  //             column.fieldMetadataId === resizedFieldKey
  //               ? { ...column, size: nextWidth }
  //               : column,
  //           );

  //           await handleColumnsChange(nextColumns);
  //         }
  //       },
  //     [
  //       resizedFieldKey,
  //       getResizeFieldOffsetState,
  //       tableColumnsByKey,
  //       tableColumns,
  //       handleColumnsChange,
  //     ],
  //   );

  //   useTrackPointer({
  //     shouldTrackPointer: resizedFieldKey !== null,
  //     onMouseDown: handleResizeHandlerStart,
  //     onMouseMove: handleResizeHandlerMove,
  //     onMouseUp: handleResizeHandlerEnd,
  //   });

  return (
    <StyledColumnHeaderCell
      key={column.fieldMetadataId}
      isResizing={resizedFieldKey === column.fieldMetadataId}
      columnWidth={Math.max(
        tableColumnsByKey[column.fieldMetadataId].size +
          (resizedFieldKey === column.fieldMetadataId ? resizeFieldOffset : 0) +
          24,
        COLUMN_MIN_WIDTH,
      )}
    >
      <StyledColumnHeadContainer
        onMouseEnter={() => setIconVisibility(true)}
        onMouseLeave={() => setIconVisibility(false)}
      >
        <ColumnHeadWithDropdown
          column={column}
          isFirstColumn={column.position === 1}
          isLastColumn={column.position === visibleTableColumns.length - 1}
          primaryColumnKey={primaryColumn?.fieldMetadataId || ''}
        />
        {iconVisibility && column.position === 0 && (
          <StyledHeaderIcon>
            <LightIconButton
              Icon={IconPlus}
              size="small"
              accent="tertiary"
              onClick={createRecord}
            />
          </StyledHeaderIcon>
        )}
      </StyledColumnHeadContainer>
      <StyledResizeHandler
        className="cursor-col-resize"
        role="separator"
        onPointerDown={() => {
          setResizedFieldKey(column.fieldMetadataId);
        }}
      />
    </StyledColumnHeaderCell>
  );
};
