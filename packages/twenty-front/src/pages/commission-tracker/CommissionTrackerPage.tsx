import styled from '@emotion/styled';

import { CommissionTrackerSheetContainer } from '@/commissions/components/CommissionTrackerSheet';
import { IconTargetArrow } from '@/ui/display/icon';
import { PageBody } from '@/ui/layout/page/PageBody';
import { PageContainer } from '@/ui/layout/page/PageContainer';
import { PageHeader } from '@/ui/layout/page/PageHeader';

const StyledCommissionSheetContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const CommissionTrackerPage = () => {
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
      </PageHeader>
      <PageBody>
        <StyledCommissionSheetContainer>
          <CommissionTrackerSheetContainer />
        </StyledCommissionSheetContainer>
      </PageBody>
    </PageContainer>
  );
};
