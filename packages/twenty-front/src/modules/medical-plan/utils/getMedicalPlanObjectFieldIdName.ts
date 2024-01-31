export const getMedicalPlanObjectFieldIdName = ({
  nameSingular,
}: {
  nameSingular: string;
}) => {
  return `${nameSingular}Id`;
};
