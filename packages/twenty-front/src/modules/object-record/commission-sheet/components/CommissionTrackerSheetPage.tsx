import { CommissionTrackerSheetBody } from '@/object-record/commission-sheet/components/CommissionTrackerSheetBody';
import { CommissionTrackerSheetBodyEffect } from '@/object-record/commission-sheet/components/CommissionTrackerSheetBodyEffect';
import { CommissionTrackerSheetHeader } from '@/object-record/commission-sheet/components/CommissionTrackerSheetHeader';

export const CommissionTrackerSheetPage = ({
  commissionSheetScopeId,
}: {
  commissionSheetScopeId: string;
}) => {
  return (
    <>
      <CommissionTrackerSheetHeader />
      <CommissionTrackerSheetBodyEffect />
      <CommissionTrackerSheetBody
        commissionSheetScopeId={commissionSheetScopeId}
      />
    </>
  );
};
