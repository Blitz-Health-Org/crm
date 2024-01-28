import { CommissionTrackerSheetPage } from '@/object-record/commission-sheet/components/CommissionTrackerSheetPage';

export const CommissionTrackerSheetPageContainer = ({
  commissionSheetScopeId,
}: {
  commissionSheetScopeId: string;
}) => {
  // future interactivity logic
  return (
    <>
      <CommissionTrackerSheetPage
        commissionSheetScopeId={commissionSheetScopeId}
      />
    </>
  );
};
