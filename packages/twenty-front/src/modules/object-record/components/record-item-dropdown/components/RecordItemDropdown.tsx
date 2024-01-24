import { useState } from 'react';

import { IconChevronDown, IconChevronRight } from '@/ui/display/icon';
import { useIcons } from '@/ui/display/icon/hooks/useIcons';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';

export type RecordItemDropdownProps = {
  children: React.ReactNode;
  dropdownTitle: string;
  defaultOpen?: boolean;
};

// const StyledCard = styled.div`
//   align-items: flex-start;
//   background: ${({ theme }) => theme.background.secondary};
//   border: 1px solid ${({ theme }) => theme.border.color.medium};
//   border-radius: ${({ theme }) => theme.border.radius.md};
//   display: flex;
//   flex-direction: column;
//   height: 300px;
//   justify-content: space-between;
//   max-width: unset;
// `;

//TODO: hotkeyscope?? Not super important
export const RecordItemDropdown = ({
  dropdownTitle,
  defaultOpen = false,
  children,
}: RecordItemDropdownProps) => {
  const [isRecordItemMenuUnfolded, setIsRecordItemMenuUnfolded] =
    useState(false);

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { getIcon } = useIcons();

  return (
    <>
      {!isRecordItemMenuUnfolded && !defaultOpen ? (
        <DropdownMenuHeader
          EndIcon={IconChevronRight}
          onClick={() => setIsRecordItemMenuUnfolded(true)}
        >
          {dropdownTitle}
        </DropdownMenuHeader>
      ) : (
        <>
          <DropdownMenuHeader
            EndIcon={IconChevronDown}
            onClick={() => setIsRecordItemMenuUnfolded(false)}
          >
            {dropdownTitle}
            {/* ADD MEDICAL/TITLE/DENTAL STUFF HERE */}
          </DropdownMenuHeader>
          <DropdownMenuSeparator />
          <DropdownMenuItemsContainer>
            {children}
            {/* {[...availableSortDefinitions]
                    .sort((a, b) => a.label.localeCompare(b.label))
                    .map((availableSortDefinition, index) => (
                      <MenuItem
                        testId={`select-sort-${index}`}
                        key={index}
                        onClick={() => handleAddSort(availableSortDefinition)}
                        LeftIcon={getIcon(availableSortDefinition.iconName)}
                        text={availableSortDefinition.label}
                      />
                    ))} 
                    Map properties to cells here
                    */}
          </DropdownMenuItemsContainer>
        </>
      )}
    </>
  );
};
