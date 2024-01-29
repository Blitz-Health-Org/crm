import { createExcelfromLabels } from '@/activities/download-employer/utils/createExcelConstants';

export const useDownloadEmployerReport = (fields: any) => {
  // const fieldName = fields.map((fieldDefinition: any) => fieldDefinition.name);

  // const [fieldValue, setFieldValue] = useRecoilState<string>(
  //   entityFieldsFamilySelector({
  //     entityId: entityId,
  //     fieldName: fieldName,
  //   }),
  // );
  // const fieldTextValue = isFieldTextValue(fieldValue) ? fieldValue : '';
  return createExcelfromLabels(fields);
};
