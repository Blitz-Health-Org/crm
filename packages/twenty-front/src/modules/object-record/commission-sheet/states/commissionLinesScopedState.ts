import { CommissionLine } from '@/object-record/commission-sheet/types/CommissionLineDefinitions';
import { createStateScopeMap } from '@/ui/utilities/recoil-scope/utils/createStateScopeMap';

export const commissionLinesScopedState = createStateScopeMap<CommissionLine[]>(
  {
    key: 'commissionLinesScopedState',
    defaultValue: [],
  },
);
