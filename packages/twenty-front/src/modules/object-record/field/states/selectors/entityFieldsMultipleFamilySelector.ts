import { selectorFamily } from 'recoil';

import { entityFieldsFamilyState } from '../entityFieldsFamilyState';

export const entityFieldsMultipleFamilySelector = selectorFamily({
  key: 'entityFieldsFamilySelector',
  get:
    <T>({ medicalPlans }: { medicalPlans: any[] }) =>
    ({ get }) =>
      medicalPlans.map((medicalPlan) => {
        return get(entityFieldsFamilyState(medicalPlan?.id)) as T;
      }),
  set:
    <T>({ medicalPlans }: { medicalPlans: any[] }) =>
    ({ set }, newValue: T) => {
      for (let it = 0; it < medicalPlans.length; it++) {
        set(entityFieldsFamilyState(medicalPlans[it].id), (prevState) => {
          console.log(
            'MULTIPLEFAMILYCHECK',
            prevState,
            (newValue as any)[it],
            medicalPlans[it],
          );
          return (newValue as any)[it] as any;
        });
      }
    },
});
