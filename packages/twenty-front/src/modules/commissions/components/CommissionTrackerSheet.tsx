import { CommissionTrackerSheetEffect } from '@/object-record/commission-sheet/components/CommissionTrackerSheetEffect';
import { CommissionTrackerSheetPage } from '@/object-record/commission-sheet/components/CommissionTrackerSheetPage';
import { CommissionSheetScope } from '@/object-record/commission-sheet/scopes/CommissionSheetScope';

export const CommissionTrackerSheetContainer = () => {
  const commissionSheetScopeId = 'commission-sheet';

  return (
    <>
      <CommissionSheetScope commissionSheetScopeId={commissionSheetScopeId}>
        <CommissionTrackerSheetEffect />
        <CommissionTrackerSheetPage />
      </CommissionSheetScope>
    </>
  );
};
