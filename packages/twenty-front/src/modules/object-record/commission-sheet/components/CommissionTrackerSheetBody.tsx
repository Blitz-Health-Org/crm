import { useRecoilValue } from 'recoil';

import { CommissionLineRow } from '@/object-record/commission-sheet/components/CommissionLineRow';
import { CommissionLineRowIndexContext } from '@/object-record/commission-sheet/contexts/CommissionLineRowIndexContext';
import { CommissionLineRowIdContext } from '@/object-record/commission-sheet/contexts/CommissionRowIdContext';
import { useCommissionSheetScopedStates } from '@/object-record/commission-sheet/hooks/useCommissionSheetScopedStates';

export const CommissionTrackerSheetBody = ({
  commissionSheetScopeId,
}: {
  commissionSheetScopeId: string;
}) => {
  const { commissionLinesState } = useCommissionSheetScopedStates({
    commissionSheetScopeId,
  });
  const commissionLines = useRecoilValue(commissionLinesState);
  return (
    <>
      <tbody>
        {commissionLines.map((rowId, rowIndex) => (
          <CommissionLineRowIdContext.Provider value={rowId} key={rowId}>
            <CommissionLineRowIndexContext.Provider value={rowIndex}>
              <CommissionLineRow key={rowId} rowId={rowId} />
            </CommissionLineRowIndexContext.Provider>
          </CommissionLineRowIdContext.Provider>
        ))}
      </tbody>

      {/* TODO BLUME: gonna need a fetch more at some point??? */}
    </>
  );
};
