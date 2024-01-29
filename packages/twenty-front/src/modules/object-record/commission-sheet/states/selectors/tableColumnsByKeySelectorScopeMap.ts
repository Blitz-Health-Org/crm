import { availableCommissionTableColumnsStateScopeMap } from '@/object-record/commission-sheet/states/availableCommissionTableColumnsStateScopeMap';
import { FieldMetadata } from '@/object-record/field/types/FieldMetadata';
import { createSelectorScopeMap } from '@/ui/utilities/recoil-scope/utils/createSelectorScopeMap';

import { ColumnDefinition } from '../../types/ColumnDefinition';

export const tableColumnsByKeySelectorScopeMap = createSelectorScopeMap({
  key: 'tableColumnsByKeySelectorScopeMap',
  get:
    ({ scopeId }) =>
    ({ get }) =>
      get(availableCommissionTableColumnsStateScopeMap({ scopeId })).reduce<
        Record<string, ColumnDefinition<FieldMetadata>>
      >(
        (result, column) => ({ ...result, [column.fieldMetadataId]: column }),
        {},
      ),
});
