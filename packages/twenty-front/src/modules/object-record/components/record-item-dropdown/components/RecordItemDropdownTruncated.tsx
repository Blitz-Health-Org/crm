import { useState } from 'react';
import styled from '@emotion/styled';

import { IconChevronDown, IconChevronRight } from '@/ui/display/icon';
import { useIcons } from '@/ui/display/icon/hooks/useIcons';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';

export type RecordItemDropdownTruncatedProps = {
  children: React.ReactNode;
  initialRows: React.ReactNode;
  dropdownTitle: any;
  defaultOpen?: boolean;
};

const StyledCollapsedContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const StyledExpandedContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

//TODO: hotkeyscope?? Not super important
export const RecordItemDropdownTruncated = ({
  dropdownTitle,
  defaultOpen = false,
  children,
  initialRows,
}: RecordItemDropdownTruncatedProps) => {
  const [isRecordItemMenuUnfolded, setIsRecordItemMenuUnfolded] =
    useState(defaultOpen);

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { getIcon } = useIcons();

  return (
    <>
      {!isRecordItemMenuUnfolded ? (
        <StyledCollapsedContainer>
          <DropdownMenuHeader
            EndIcon={IconChevronRight}
            onClick={() => setIsRecordItemMenuUnfolded(true)}
          >
            {dropdownTitle}
          </DropdownMenuHeader>
          {initialRows}
        </StyledCollapsedContainer>
      ) : (
        <>
          <StyledExpandedContainer>
            <DropdownMenuHeader
              EndIcon={IconChevronDown}
              onClick={() => setIsRecordItemMenuUnfolded(false)}
            >
              {dropdownTitle}
              {/* ADD MEDICAL/TITLE/DENTAL STUFF HERE */}
            </DropdownMenuHeader>
            <DropdownMenuItemsContainer>{children}</DropdownMenuItemsContainer>
          </StyledExpandedContainer>
        </>
      )}
    </>
  );
};
