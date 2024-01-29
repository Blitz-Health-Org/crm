import { useSetRecoilState } from 'recoil';

import { CommissionSheetScopeInternalContext } from '@/object-record/commission-sheet/scopes/CommissionSheetScopeInternalContext';
import { availableCommissionTableColumnsStateScopeMap } from '@/object-record/commission-sheet/states/availableCommissionTableColumnsStateScopeMap';
import { tableColumnsByKeySelectorScopeMap } from '@/object-record/commission-sheet/states/selectors/tableColumnsByKeySelectorScopeMap';
import { getCommissionSheetScopedStates } from '@/object-record/commission-sheet/utils/getCommissionSheetScopedStates';
import { resizeFieldOffsetStateScopeMap } from '@/object-record/record-table/states/resizeFieldOffsetStateScopeMap';
import { useAvailableScopeIdOrThrow } from '@/ui/utilities/recoil-scope/scopes-internal/hooks/useAvailableScopeId';
import { getSelector } from '@/ui/utilities/recoil-scope/utils/getSelector';
import { getState } from '@/ui/utilities/recoil-scope/utils/getState';

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

  const tableColumnsByKeySelector = getSelector(
    tableColumnsByKeySelectorScopeMap,
    scopeId,
  );
  const getResizeFieldOffsetState = getState(
    resizeFieldOffsetStateScopeMap,
    scopeId,
  );

  const { commissionLinesState } = getCommissionSheetScopedStates({
    commissionSheetScopeId: scopeId,
  });

  return {
    commissionLinesState,
    getAvailableTableColumnsState,
    setAvailableTableColumns,
    tableColumnsByKeySelector,
    getResizeFieldOffsetState,
  };
};
