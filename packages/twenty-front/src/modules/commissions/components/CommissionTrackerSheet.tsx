import { CommissionTrackerSheetEffect } from '@/object-record/commission-sheet/components/CommissionTrackerSheetEffect';
import { CommissionTrackerSheetPageContainer } from '@/object-record/commission-sheet/components/CommissionTrackerSheetPageContainer';
import { CommissionSheetScope } from '@/object-record/commission-sheet/scopes/CommissionSheetScope';

export const CommissionTrackerSheetContainer = () => {
  const commissionSheetScopeId = 'commission-sheet';

  return (
    <>
      <CommissionSheetScope commissionSheetScopeId={commissionSheetScopeId}>
        <CommissionTrackerSheetEffect
          commissionSheetScopeId={commissionSheetScopeId}
        />
        <CommissionTrackerSheetPageContainer
          commissionSheetScopeId={commissionSheetScopeId}
        />
      </CommissionSheetScope>
    </>
  );
};
