import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useCommissionSheetScopedStates } from '@/object-record/commission-sheet/hooks/useCommissionSheetScopedStates';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import { ObjectRecordConnection } from '@/object-record/types/ObjectRecordConnection';

export const CommissionTrackerSheetEffect = () => {
  const { commissionLinesState } = useCommissionSheetScopedStates();

  const [commissionLines, setCommissionLines] =
    useRecoilState(commissionLinesState);

  useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.PipelineStep,
    filter: {},
    onCompleted: useCallback(
      (data: ObjectRecordConnection) => {
        //reinsert generic
        setCommissionLines(data.edges.map((edge) => edge.node)); //check this arg
      },
      [setCommissionLines],
    ),
  });

  return <></>;
};
