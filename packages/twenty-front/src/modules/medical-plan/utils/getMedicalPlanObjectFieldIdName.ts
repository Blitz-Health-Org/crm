export const getPlanObjectFieldIdName = ({
  nameSingular,
}: {
  nameSingular: string;
}) => {
  return `${nameSingular}Id`;
};
