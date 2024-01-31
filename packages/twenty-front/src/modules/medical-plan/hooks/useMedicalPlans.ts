import { medicalPlansStateScopeMap } from '@/activities/plan-details/components/states/medicalPlansStateScopeMap';
import { MedicalPlan } from '@/medical-plan/types/MedicalPlan';
import { MedicalPlanTargetableObject } from '@/medical-plan/types/MedicalPlanTargetableObject';
import { getPlanObjectFieldIdName } from '@/medical-plan/utils/getMedicalPlanObjectFieldIdName';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import { getState } from '@/ui/utilities/recoil-scope/utils/getState';

export const useMedicalPlans = (
  targetableObject: MedicalPlanTargetableObject,
  scopeId: string,
) => {
  const targetableObjectFieldIdName = getPlanObjectFieldIdName({
    nameSingular: targetableObject.targetObjectNameSingular,
  });

  const { records: medicalPlans } = useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.MedicalPlan,
    filter: {
      [targetableObjectFieldIdName]: {
        eq: targetableObject.id,
      },
    },
    orderBy: {
      createdAt: 'DescNullsFirst',
    },
  });

  const getMedicalPlansState = getState(medicalPlansStateScopeMap, scopeId);

  return {
    medicalPlans: medicalPlans as MedicalPlan[],
    getMedicalPlansState,
  };
};
