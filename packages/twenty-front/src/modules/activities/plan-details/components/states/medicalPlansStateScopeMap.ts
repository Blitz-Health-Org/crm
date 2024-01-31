import { createStateScopeMap } from '@/ui/utilities/recoil-scope/utils/createStateScopeMap';

export const medicalPlansStateScopeMap = createStateScopeMap({
  key: 'medicalPlansStateScopeMap',
  defaultValue: [],
});
