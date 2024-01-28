// import styled from '@emotion/styled';
// import { NavigationDrawerHeader } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/modules/ui/navigation/navigation-drawer/components/NavigationDrawerHeader.tsx'
// import { ReactNode, useState } from 'react';
// import {
//   IconMoneybag
// } from '@/ui/display/icon';

// export const CommissionTrackerPage = () => {

//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (

//     <NavigationDrawerHeader
//     name="Commission Tracker"
//     logo='@/ui/input/button/components/IconButton'
//     showCollapseButton={true}
//     />

//   );
// };

import styled from '@emotion/styled';

import { IconMoneybag } from '@/ui/display/icon';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';

import { RecordItemDropdown } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/modules/object-record/components/record-item-dropdown/components/RecordItemDropdown.tsx';
import { NavigationDrawerCollapseButton } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/modules/ui/navigation/navigation-drawer/components/NavigationDrawerCollapseButton.tsx';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(1)};
  margin-top: 8px;
  user-select: none;
`;

const StyledContainerComplete = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(1)};
  user-select: none;
  width: 100%;
`;

const StyledContainerDropdowns = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(1)};
  margin-top: 12px;
  margin-bottom: 12px;
  user-select: none;
  width: 80%;
`;

const StyledName = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: 'Inter';
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const StyledIconMoneybag = styled(IconMoneybag)`
  // Change color to gray or black as desired
  color: #454545c9; /* Change to your preferred color */
`;

const StyledNavigationDrawerCollapseButton = styled(
  NavigationDrawerCollapseButton,
)<{ show?: boolean }>`
  margin-left: auto;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.animation.duration.normal}s;
`;

type NavigationDrawerHeaderProps = {
  name?: string;
  showCollapseButton: boolean;
};

export const CommissionTrackerPage = ({
  name = 'Commission Tracker',
  showCollapseButton,
}: CommissionTrackerPageProps) => {
  const isMobile = useIsMobile();

  return (
    <StyledContainerComplete>
      <StyledContainer>
        {!isMobile && (
          <StyledNavigationDrawerCollapseButton direction="left" show={true} />
        )}
        <StyledIconMoneybag />
        <StyledName>{name}</StyledName>
      </StyledContainer>

      <StyledContainerDropdowns>
        <RecordItemDropdown dropdownTitle="sup">Sup</RecordItemDropdown>
      </StyledContainerDropdowns>
    </StyledContainerComplete>
  );
};
