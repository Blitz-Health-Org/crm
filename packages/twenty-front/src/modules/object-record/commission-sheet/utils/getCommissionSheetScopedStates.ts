import { commissionLinesScopedState } from '@/object-record/commission-sheet/states/commissionLinesScopedState';
import { getScopedStateDeprecated } from '@/ui/utilities/recoil-scope/utils/getScopedStateDeprecated';

export const getCommissionSheetScopedStates = ({
  commissionSheetScopeId,
}: {
  commissionSheetScopeId: string;
}) => {
  const commissionLinesState = getScopedStateDeprecated(
    commissionLinesScopedState,
    commissionSheetScopeId,
  );

  return {
    commissionLinesState,
  };
};
