import styled from '@emotion/styled';

import { RecordTableContainer } from '@/object-record/components/RecordTableContainer';
import { useCreateOneRecord } from '@/object-record/hooks/useCreateOneRecord';
import { RecordTableActionBar } from '@/object-record/record-table/action-bar/components/RecordTableActionBar';
import { RecordTableContextMenu } from '@/object-record/record-table/context-menu/components/RecordTableContextMenu';
import { useSelectedTableCellEditMode } from '@/object-record/record-table/record-table-cell/hooks/useSelectedTableCellEditMode';
import { DEFAULT_CELL_SCOPE } from '@/object-record/record-table/record-table-cell/hooks/useTableCell';
import { IconTargetArrow } from '@/ui/display/icon';
import { PageAddButton } from '@/ui/layout/page/PageAddButton';
import { PageBody } from '@/ui/layout/page/PageBody';
import { PageContainer } from '@/ui/layout/page/PageContainer';
import { PageHeader } from '@/ui/layout/page/PageHeader';
import { useSetHotkeyScope } from '@/ui/utilities/hotkey/hooks/useSetHotkeyScope';

const StyledCommissionSheetContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const CommissionTrackerPage = () => {
  const recordTableId = 'commissionLines';
  const objectNamePlural = 'commissionLines';
  const objectNameSingular = 'commissionLine';

  const { createOneRecord: createOneObject } = useCreateOneRecord({
    objectNameSingular,
  });

  const { setSelectedTableCellEditMode } = useSelectedTableCellEditMode({
    scopeId: recordTableId,
  });
  const setHotkeyScope = useSetHotkeyScope();

  const handleAddButtonClick = async () => {
    await createOneObject?.({});

    setSelectedTableCellEditMode(0, 0);
    setHotkeyScope(DEFAULT_CELL_SCOPE.scope, DEFAULT_CELL_SCOPE.customScopes);
  };

  return (
    // <StyledContainerComplete>
    //   <StyledContainer>
    //     {!isMobile && (
    //       <StyledNavigationDrawerCollapseButton direction="left" show={true} />
    //     )}
    //     <StyledIconMoneybag />
    //     <StyledName>{name}</StyledName>
    //   </StyledContainer>

    //   <StyledContainerDropdowns>
    //     <RecordItemDropdown dropdownTitle="sup">Sup</RecordItemDropdown>
    //   </StyledContainerDropdowns>
    // </StyledContainerComplete>
    <PageContainer>
      <PageHeader title="Commission Tracker" Icon={IconTargetArrow}>
        {/* TODO BLUME: Fix this icon*/}
        <PageAddButton onClick={handleAddButtonClick} />
      </PageHeader>
      <PageBody>
        <StyledCommissionSheetContainer>
          {/* <CommissionTrackerSheetContainer /> */}
          <RecordTableContainer
            recordTableId={recordTableId}
            objectNamePlural={objectNamePlural}
            createRecord={handleAddButtonClick}
          />
        </StyledCommissionSheetContainer>
        <RecordTableActionBar recordTableId={recordTableId} />
        <RecordTableContextMenu recordTableId={recordTableId} />
      </PageBody>
    </PageContainer>
  );
};
