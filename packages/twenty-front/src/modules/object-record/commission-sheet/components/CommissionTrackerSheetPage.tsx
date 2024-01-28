import { CommissionTrackerSheetBody } from '@/object-record/commission-sheet/components/CommissionTrackerSheetBodyEffect';
import { CommissionTrackerSheetHeader } from '@/object-record/commission-sheet/components/CommissionTrackerSheetHeader';

export const CommissionTrackerSheetPage = () => {
  return (
    <>
      <CommissionTrackerSheetHeader />
      <CommissionTrackerSheetBodyEffect />
      <CommissionTrackerSheetBody />
    </>
  );
};
