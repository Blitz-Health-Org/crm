import { DentalPlan } from '@/medical-plan/types/MedicalPlan';
import { getPlanObjectFieldIdName } from '@/medical-plan/utils/getMedicalPlanObjectFieldIdName';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';

export const useDentalPlans = (
  targetableObject: any, //TODO: fix typing
  scopeId: string,
) => {
  const targetableObjectFieldIdName = getPlanObjectFieldIdName({
    nameSingular: targetableObject.targetObjectNameSingular,
  });

  const { records: dentalPlans } = useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.DentalPlan,
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
    dentalPlans: dentalPlans as DentalPlan[],
  };
};
