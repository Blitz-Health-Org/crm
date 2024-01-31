export type MedicalPlanTargetableObject = {
  id: string;
  targetObjectNameSingular: string;
  relatedTargetableObjects?: MedicalPlanTargetableObject[];
};
