import { VisionPlan } from '@/medical-plan/types/MedicalPlan';
import { getPlanObjectFieldIdName } from '@/medical-plan/utils/getMedicalPlanObjectFieldIdName';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';

export const useVisionPlans = (
  targetableObject: any, //TODO: fix typing
  scopeId: string,
) => {
  const targetableObjectFieldIdName = getPlanObjectFieldIdName({
    nameSingular: targetableObject.targetObjectNameSingular,
  });

  const { records: visionPlans } = useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.VisionPlan,
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
    visionPlans: visionPlans as VisionPlan[],
  };
};
