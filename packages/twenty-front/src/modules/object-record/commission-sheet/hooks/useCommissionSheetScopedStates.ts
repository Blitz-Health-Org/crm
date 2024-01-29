import { useSetRecoilState } from 'recoil';

import { CommissionSheetScopeInternalContext } from '@/object-record/commission-sheet/scopes/CommissionSheetScopeInternalContext';
import { availableCommissionTableColumnsStateScopeMap } from '@/object-record/commission-sheet/states/availableCommissionTableColumnsStateScopeMap';
import { getCommissionSheetScopedStates } from '@/object-record/commission-sheet/utils/getCommissionSheetScopedStates';
import { useAvailableScopeIdOrThrow } from '@/ui/utilities/recoil-scope/scopes-internal/hooks/useAvailableScopeId';

type useCommissionSheetScopedStatesProps = {
  commissionSheetScopeId?: string;
};

export const useCommissionSheetScopedStates = (
  args?: useCommissionSheetScopedStatesProps,
) => {
  const { commissionSheetScopeId } = args ?? {};

  const scopeId = useAvailableScopeIdOrThrow(
    CommissionSheetScopeInternalContext,
    commissionSheetScopeId,
  );

  const getAvailableTableColumnsState = () =>
    availableCommissionTableColumnsStateScopeMap({ scopeId });

  const setAvailableTableColumns = useSetRecoilState(
    getAvailableTableColumnsState(),
  );

  const { commissionLinesState } = getCommissionSheetScopedStates({
    commissionSheetScopeId: scopeId,
  });

  return {
    commissionLinesState,
    getAvailableTableColumnsState,
    setAvailableTableColumns,
  };
};
