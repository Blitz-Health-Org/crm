import { useRecoilValue } from 'recoil';

import { CommissionTrackerSheetPage } from '@/object-record/commission-sheet/components/CommissionTrackerSheetPage';
import { useCommissionSheetScopedStates } from '@/object-record/commission-sheet/hooks/useCommissionSheetScopedStates';

export const CommissionTrackerSheetPageContainer = ({
  commissionSheetScopeId,
}: {
  commissionSheetScopeId: string;
}) => {
  const { commissionLinesState } = useCommissionSheetScopedStates({
    commissionSheetScopeId,
  });
  const commissionLines = useRecoilValue(commissionLinesState);

  // future interactivity logic
  return (
    <>
      <CommissionTrackerSheetPage />
    </>
  );
};
