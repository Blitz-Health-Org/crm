import { createExcelfromLabels } from '@/activities/download-employer/utils/createExcelConstants';

export const downloadEmployerReport = (fields: any) => {
  return createExcelfromLabels(fields);
};
