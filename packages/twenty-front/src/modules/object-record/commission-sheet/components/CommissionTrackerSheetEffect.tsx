import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { useColumnDefinitionsFromFieldMetadata } from '@/object-metadata/hooks/useColumnDefinitionsFromFieldMetadata';
import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useCommissionSheetScopedStates } from '@/object-record/commission-sheet/hooks/useCommissionSheetScopedStates';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import { ObjectRecordConnection } from '@/object-record/types/ObjectRecordConnection';

export const CommissionTrackerSheetEffect = ({
  commissionSheetScopeId,
}: {
  commissionSheetScopeId: string;
}) => {
  const objectNameSingular = 'commissionLine';
  const { commissionLinesState } = useCommissionSheetScopedStates();

  const {
    setAvailableTableColumns,
    // setOnEntityCountChange,
    // setObjectMetadataConfig,
  } = useCommissionSheetScopedStates({ commissionSheetScopeId });

  const [commissionLines, setCommissionLines] =
    useRecoilState(commissionLinesState);

  useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.CommissionLine,
    filter: {},
    onCompleted: useCallback(
      (data: ObjectRecordConnection) => {
        //reinsert generic
        setCommissionLines(data.edges.map((edge) => edge.node)); //check this arg
      },
      [setCommissionLines],
    ),
  });

  const { objectMetadataItem } = useObjectMetadataItem({ objectNameSingular });

  const { columnDefinitions, filterDefinitions, sortDefinitions } =
    useColumnDefinitionsFromFieldMetadata(objectMetadataItem);

  useEffect(() => {
    setAvailableTableColumns(columnDefinitions);
  });

  return <></>;
};
