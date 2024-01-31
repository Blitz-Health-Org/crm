import { MedicalPlan } from '@/medical-plan/types/MedicalPlan';
import { MedicalPlanTargetableObject } from '@/medical-plan/types/MedicalPlanTargetableObject';
import { getMedicalPlanObjectFieldIdName } from '@/medical-plan/utils/getMedicalPlanObjectFieldIdName';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';

// do we need to test this?
export const useMedicalPlans = (
  targetableObject: MedicalPlanTargetableObject,
) => {
  const targetableObjectFieldIdName = getMedicalPlanObjectFieldIdName({
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

  return {
    medicalPlans: medicalPlans as MedicalPlan[],
  };
};
