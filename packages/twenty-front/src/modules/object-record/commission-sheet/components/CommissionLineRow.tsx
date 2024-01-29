import { useContext } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { CommissionSheetTableCellContainer } from '@/object-record/commission-sheet/components/CommissionSheetTableCellContainer';
import { useCommissionSheetScopedStates } from '@/object-record/commission-sheet/hooks/useCommissionSheetScopedStates';
import { CheckboxCell } from '@/object-record/record-table/components/CheckboxCell';
import { ColumnContext } from '@/object-record/record-table/contexts/ColumnContext';
import { ScrollWrapperContext } from '@/ui/utilities/scroll/components/ScrollWrapper';

export const StyledRow = styled.tr<{ selected: boolean }>`
  background: ${(props) =>
    props.selected ? props.theme.accent.quaternary : 'none'};
`;

const StyledPlaceholder = styled.td`
  height: 30px;
`;

export const CommissionLineRow = ({ rowId }: { rowId: string }) => {
  //   const { visibleTableColumnsSelector } = useRecordTableStates();

  //   const visibleTableColumns = useRecoilValue(visibleTableColumnsSelector);

  //   const { currentRowSelected } = useCurrentRowSelected();

  const { getAvailableTableColumnsState } = useCommissionSheetScopedStates();
  const columns = useRecoilValue(getAvailableTableColumnsState());

  console.log('columns', columns);

  const scrollWrapperRef = useContext(ScrollWrapperContext);

  //   const { ref: elementRef, inView } = useInView({
  //     root: scrollWrapperRef.current,
  //     rootMargin: '1000px',
  //   });

  return (
    <StyledRow
      //   ref={elementRef}
      data-testid={`row-id-${rowId}`}
      selected={false} // implement later
      data-selectable-id={rowId}
    >
      {/* {inView ? ( */}
      <>
        <td>
          <CheckboxCell />
        </td>
        {[...columns]
          //   [...visibleTableColumns]
          // .sort((columnA, columnB) => columnA.position - columnB.position)
          .map((column, columnIndex) => {
            return (
              <ColumnContext.Provider
                value={column}
                key={column.fieldMetadataId}
              >
                <CommissionSheetTableCellContainer cellIndex={columnIndex} />
              </ColumnContext.Provider>
            );
          })}
        <td></td>
      </>
      {/* ) : (
        <StyledPlaceholder />
      )} */}
    </StyledRow>
  );
};
