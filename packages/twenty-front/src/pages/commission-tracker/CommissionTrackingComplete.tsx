import styled from '@emotion/styled';

import { RecordItemDropdown } from '@/object-record/components/record-item-dropdown/components/RecordItemDropdown';
// const StyledMainContainer = styled.div`
//   background: ${({ theme }) => theme.background.noisy};
//   box-sizing: border-box;
//   display: flex;
//   flex: 1 1 auto;
//   flex-direction: row;
//   gap: ${({ theme }) => theme.spacing(2)};
//   min-height: 0;
//   padding-bottom: ${({ theme }) => theme.spacing(3)};
//   padding-right: ${({ theme }) => theme.spacing(3)};
//   padding-left: 0;
//   width: 100%;
// `;

// const StyledContainer = styled.div`
//   align-items: center;
//   display: flex;
//   gap: ${({ theme }) => theme.spacing(2)};
//   height: ${({ theme }) => theme.spacing(6)};
//   padding: ${({ theme }) => theme.spacing(1)};
//   margin-top: 10px;
//   user-select: none;
// `;

// const StyledNewContainer = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between; /* Adjust the width according to your preference */
//   user-select: none; /* Optional: Align items vertically in the center */
//   width: 100%;
// `;

// const StyledButtonContainer = styled.div`
//   background-color: #e4e4e4;
//   border-radius: 4px; /* Set the background color */
//   cursor: pointer; /* Set the border-radius for rounded corners */
//   padding: 7px; /* Add a pointer cursor for interaction */
// `;

// const StyledButton = styled.button`
//   background-color: transparent;
//   border: none;
//   color: #333;
//   cursor: pointer;
//   font-size: 12px; /* Set the text color */
//   outline: none;
// `;

// const StyledContainerComplete = styled.div`
//   align-items: start;
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing(2)};
//   height: 100%;
//   padding: ${({ theme }) => theme.spacing(0.5)};
//   padding-right: 20px;
//   user-select: none;
//   width: 100%;
// `;

// const StyledContainerDropdowns = styled.div`
//   align-items: start;
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing(2)};
//   height: 100%;
//   padding: ${({ theme }) => theme.spacing(4)};
//   margin-top: 6px;
//   margin-bottom: 12px;
//   user-select: none;
//   background-color: white;
//   width: 98%;
//   border-radius: 10px; /* Adjust the value according to your preference */
//   border: 0.5px solid lightgray; /* Adjust the width and color according to your preference */
// `;

const StyledEightyPercent = styled.div`
  width: 100%;
`;

// const StyledName = styled.div`
//   color: ${({ theme }) => theme.font.color.primary};
//   font-family: 'Inter';
//   font-size: ${({ theme }) => theme.font.size.md};
//   font-weight: ${({ theme }) => theme.font.weight.regular};
// `;

const StyledRecordItemDropdown = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

// const StyledIconMoneybag = styled(IconMoneybag)`
//   // Change color to gray or black as desired
//   color: #333; /* Change to your preferred color */
//   width: 16px; /* Set the desired width */
//   height: 16px; /* Set the desired height */
// `;

// const StyledNavigationDrawerCollapseButton = styled(
//   NavigationDrawerCollapseButton,
// )<{ show?: boolean }>`
//   margin-left: auto;
//   opacity: ${({ show }) => (show ? 1 : 0)};
//   transition: opacity ${({ theme }) => theme.animation.duration.normal}s;
// `;

// type NavigationDrawerHeaderProps = {
//   name?: string;
//   showCollapseButton: boolean;
// };

export const CommissionTrackingComplete = () => {
  return (
    <StyledEightyPercent>
      <StyledRecordItemDropdown>
        <RecordItemDropdown dropdownTitle="Carrier #1">Sup</RecordItemDropdown>
      </StyledRecordItemDropdown>

      <StyledRecordItemDropdown>
        <RecordItemDropdown dropdownTitle="Carrier #2">Sup</RecordItemDropdown>
      </StyledRecordItemDropdown>

      <StyledRecordItemDropdown>
        <RecordItemDropdown dropdownTitle="Carrier #3">Sup</RecordItemDropdown>
      </StyledRecordItemDropdown>
    </StyledEightyPercent>
  );
};
