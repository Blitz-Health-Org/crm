import styled from '@emotion/styled';

import { CommissionTrackerSheetBody } from '@/object-record/commission-sheet/components/CommissionTrackerSheetBody';
import { CommissionTrackerSheetBodyEffect } from '@/object-record/commission-sheet/components/CommissionTrackerSheetBodyEffect';
import { CommissionTrackerSheetHeader } from '@/object-record/commission-sheet/components/CommissionTrackerSheetHeader';
import { RecordTableScope } from '@/object-record/record-table/scopes/RecordTableScope';
import { rgba } from '@/ui/theme/constants/colors';

const StyledCommissionTable = styled.table`
  border-radius: ${({ theme }) => theme.border.radius.sm};
  border-spacing: 0;
  margin-right: ${({ theme }) => theme.table.horizontalCellMargin};
  table-layout: fixed;

  width: calc(100% - ${({ theme }) => theme.table.horizontalCellMargin} * 2);

  th {
    border-block: 1px solid ${({ theme }) => theme.border.color.light};
    color: ${({ theme }) => theme.font.color.tertiary};
    padding: 0;
    text-align: left;

    :last-child {
      border-right-color: transparent;
    }
    :first-of-type {
      border-left-color: transparent;
      border-right-color: transparent;
    }
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
    color: ${({ theme }) => theme.font.color.primary};
    padding: 0;

    text-align: left;

    :last-child {
      border-right-color: transparent;
    }
    :first-of-type {
      border-left-color: transparent;
      border-right-color: transparent;
    }
  }

  th,
  td {
    background-color: ${({ theme }) => theme.background.primary};
    border-right: 1px solid ${({ theme }) => theme.border.color.light};
  }

  thead th:nth-of-type(-n + 2),
  tbody td:nth-of-type(-n + 2) {
    position: sticky;
    z-index: 2;
    border-right: none;
  }

  thead th:nth-of-type(1),
  tbody td:nth-of-type(1) {
    left: 0;
  }
  thead th:nth-of-type(2),
  tbody td:nth-of-type(2) {
    left: calc(${({ theme }) => theme.table.checkboxColumnWidth} - 2px);
  }

  tbody td:nth-of-type(2)::after,
  thead th:nth-of-type(2)::after {
    content: '';
    height: calc(100% + 1px);
    position: absolute;
    top: 0;
    width: 4px;
    right: -4px;
  }

  &.freeze-first-columns-shadow thead th:nth-of-type(2)::after,
  &.freeze-first-columns-shadow tbody td:nth-of-type(2)::after {
    box-shadow: ${({ theme }) =>
      `4px 0px 4px -4px ${
        theme.name === 'dark'
          ? rgba(theme.grayScale.gray50, 0.8)
          : rgba(theme.grayScale.gray100, 0.25)
      } inset`};
  }

  thead th:nth-of-type(3),
  tbody td:nth-of-type(3) {
    border-left: 1px solid ${({ theme }) => theme.border.color.light};
  }
`;
export const CommissionTrackerSheetPage = ({
  commissionSheetScopeId,
}: {
  commissionSheetScopeId: string;
}) => {
  return (
    <>
      <RecordTableScope
        recordTableScopeId={commissionSheetScopeId}
        onColumnsChange={() => {}} //TODO BLUME: implement
      >
        <StyledCommissionTable className="entity-table-cell">
          <CommissionTrackerSheetHeader />
          <CommissionTrackerSheetBodyEffect />
          <CommissionTrackerSheetBody
            commissionSheetScopeId={commissionSheetScopeId}
          />
        </StyledCommissionTable>
      </RecordTableScope>
    </>
  );
};
