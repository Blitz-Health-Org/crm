import writeXlsxFile, { SheetData } from 'write-excel-file';

type ValueProps = {
  label: string;
  options: {
    value: string;
  };
};

export const createExcelfromLabels = async (values: ValueProps[]) => {
  const data = [
    ...['label', 'value'].map((value) => ({
      value,
      fontWeight: 'bold',
    })),
    ...values
      .filter((value) => value.options !== null)
      .map((value) => [
        {
          type: String,
          value: value.label,
        },
        {
          type: String,
          value: value.options.value,
        },
      ]),
  ];

  console.log('data', values);

  await writeXlsxFile(data as SheetData, { fileName: 'file.xlsx' });
};
