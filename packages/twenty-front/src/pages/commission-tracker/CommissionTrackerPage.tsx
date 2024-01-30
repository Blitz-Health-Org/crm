// import styled from '@emotion/styled';
// import React, { useState } from 'react';
// import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';
// import { NavigationDrawerCollapseButton } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/modules/ui/navigation/navigation-drawer/components/NavigationDrawerCollapseButton.tsx';
// import { RecordItemDropdown } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/modules/object-record/components/record-item-dropdown/components/RecordItemDropdown.tsx'
// import { CommissionTrackingCarriers } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/pages/commission-tracker/CommissionTrackingCarriers.tsx'
// import { CommissionTrackingClients } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/pages/commission-tracker/CommissionTrackingClients'
// import { CommissionTrackingComplete } from '/Users/varunverma/Desktop/twenty/packages/twenty-front/src/pages/commission-tracker/CommissionTrackingComplete.tsx'

// import {
//   IconMoneybag
// } from '@/ui/display/icon';
// import { isNavigationDrawerOpenState } from '@/ui/navigation/states/isNavigationDrawerOpenState';
// import { useRecoilValue } from 'recoil';
// import { space, background, border } from '@chakra-ui/system';
// import { size } from '@floating-ui/react';
// import { px, color } from 'framer-motion';
// import { start } from 'repl';

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
//   `;

// const StyledContainer = styled.div`
//   align-items: center;

// import { RecordTableContainer } from '@/object-record/components/RecordTableContainer';
// import { useCreateOneRecord } from '@/object-record/hooks/useCreateOneRecord';
// import { RecordTableActionBar } from '@/object-record/record-table/action-bar/components/RecordTableActionBar';
// import { RecordTableContextMenu } from '@/object-record/record-table/context-menu/components/RecordTableContextMenu';
// import { useSelectedTableCellEditMode } from '@/object-record/record-table/record-table-cell/hooks/useSelectedTableCellEditMode';
// import { DEFAULT_CELL_SCOPE } from '@/object-record/record-table/record-table-cell/hooks/useTableCell';
// import { IconTargetArrow } from '@/ui/display/icon';
// import { PageAddButton } from '@/ui/layout/page/PageAddButton';
// import { PageBody } from '@/ui/layout/page/PageBody';
// import { PageContainer } from '@/ui/layout/page/PageContainer';
// import { PageHeader } from '@/ui/layout/page/PageHeader';
// import { useSetHotkeyScope } from '@/ui/utilities/hotkey/hooks/useSetHotkeyScope';

// const StyledCommissionSheetContainer = styled.div`
//   display: flex;
//   height: 100%;
//   gap: ${({ theme }) => theme.spacing(2)};
//   height: ${({ theme }) => theme.spacing(6)};
//   padding: ${({ theme }) => theme.spacing(1)};
//   margin-top: 10px;
//   user-select: none;
// `;

// const StyledNewContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%; /* Adjust the width according to your preference */
//   align-items: center; /* Optional: Align items vertically in the center */
//   user-select: none;
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
//   padding: ${({ theme }) => theme.spacing(2)};
//   margin-top: 3px;
//   margin-bottom: 12px;
//   user-select: none;
//   background-color: white;
//   width: 98%;
//   border-radius: 10px; /* Adjust the value according to your preference */
//   border: 0.5px solid lightgray; /* Adjust the width and color according to your preference */
// `;

// const StyledEightyPercent = styled.div`
// width: 100%;`

// const StyledName = styled.div`
//   color: ${({ theme }) => theme.font.color.primary};
//   font-family: 'Inter';
//   font-size: ${({ theme }) => theme.font.size.md};
//   font-weight: ${({ theme }) => theme.font.weight.regular};
// `;

// const StyledRecordItemDropdown = styled.div`
//   margin-bottom: 16px;
// `;

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

// export const CommissionTrackerPage = ({
//   name = 'Commission Tracker',
//   showCollapseButton,
// }: NavigationDrawerHeaderProps) => {
//   const isMobile = useIsMobile();
//   const isNavigationDrawerOpen = useRecoilValue(isNavigationDrawerOpenState);

//   const [selectedOption, setSelectedOption] = useState('Carriers');

//   const handleOptionChange = (option: any) => {
//     setSelectedOption(option);
//   };

// export const CommissionTrackerPage = () => {
//   const recordTableId = 'commissionLines';
//   const objectNamePlural = 'commissionLines';
//   const objectNameSingular = 'commissionLine';

//   const { createOneRecord: createOneObject } = useCreateOneRecord({
//     objectNameSingular,
//   });

//   const { setSelectedTableCellEditMode } = useSelectedTableCellEditMode({
//     scopeId: recordTableId,
//   });
//   const setHotkeyScope = useSetHotkeyScope();

//   const handleAddButtonClick = async () => {
//     await createOneObject?.({});

//     setSelectedTableCellEditMode(0, 0);
//     setHotkeyScope(DEFAULT_CELL_SCOPE.scope, DEFAULT_CELL_SCOPE.customScopes);
//   };

//   return (
//     // <StyledContainerComplete>
//     //   <StyledContainer>
//     //     {!isMobile && (
//     //       <StyledNavigationDrawerCollapseButton direction="left" show={true} />
//     //     )}
//     //     <StyledIconMoneybag />
//     //     <StyledName>{name}</StyledName>
//     //   </StyledContainer>
//     <StyledContainerComplete>
//       <StyledNewContainer>
//         <StyledContainer>
//           {!isMobile && !isNavigationDrawerOpen && (
//             <StyledNavigationDrawerCollapseButton
//               direction="left"
//               show={true}
//             />
//           )}
//           <StyledIconMoneybag />
//           <StyledName>{name}</StyledName>
//         </StyledContainer>

//     //   <StyledContainerDropdowns>
//     //     <RecordItemDropdown dropdownTitle="sup">Sup</RecordItemDropdown>
//     //   </StyledContainerDropdowns>
//     // </StyledContainerComplete>
//     <PageContainer>
//       <PageHeader title="Commission Tracker" Icon={IconTargetArrow}>
//         {/* TODO BLUME: Fix this icon*/}
//         <PageAddButton onClick={handleAddButtonClick} />
//       </PageHeader>
//       <PageBody>
//         <StyledCommissionSheetContainer>
//           {/* <CommissionTrackerSheetContainer /> */}
//           <RecordTableContainer
//             recordTableId={recordTableId}
//             objectNamePlural={objectNamePlural}
//             createRecord={handleAddButtonClick}
//           />
//         </StyledCommissionSheetContainer>
//         <RecordTableActionBar recordTableId={recordTableId} />
//         <RecordTableContextMenu recordTableId={recordTableId} />
//       </PageBody>
//     </PageContainer>
//         <StyledContainer>

//           <StyledButton
//               onClick={() => handleOptionChange('Complete')}
//               isSelected={selectedOption === 'Complete'}
//             >
//               Complete
//             </StyledButton>

//             <StyledButton
//               onClick={() => handleOptionChange('Carriers')}
//               isSelected={selectedOption === 'Carriers'}
//             >
//               Carriers
//             </StyledButton>

//             <StyledButton
//               onClick={() => handleOptionChange('Clients')}
//               isSelected={selectedOption === 'Clients'}
//             >
//               Clients
//             </StyledButton>

//         </StyledContainer>
//       </StyledNewContainer>

//       <StyledContainerDropdowns>
//         {selectedOption === 'Carriers' && <CommissionTrackingCarriers />}
//         {selectedOption === 'Clients' && <CommissionTrackingClients />}
//         {selectedOption === 'Complete' && <CommissionTrackingComplete />}
//       </StyledContainerDropdowns>
//     </StyledContainerComplete>
//   );
// };

// const StyledButton = styled.button<{ isSelected: boolean }>`
//   border: none;
//   outline: none;
//   background-color: ${({ isSelected }) => (isSelected ? '#bcbcbcc1' : '#d4d4d4c1')};
//   color: #000000c8; /* Set the text color */
//   font-size: 12px;
//   cursor: pointer;
//   padding: 10px;
//   border-radius: 4px;
// `;
