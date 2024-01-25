import { useState } from 'react';
import styled from '@emotion/styled';

import { IconChevronDown, IconChevronRight } from '@/ui/display/icon';
import { useIcons } from '@/ui/display/icon/hooks/useIcons';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';

export type RecordItemDropdownTruncatedProps = {
  children: React.ReactNode;
  dropdownTitle: any;
  defaultOpen?: boolean;
};

const CollapsedContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 150px;
  overflow: hidden;
`;

const ExpandedContainer = styled.div`
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
}: RecordItemDropdownTruncatedProps) => {
  const [isRecordItemMenuUnfolded, setIsRecordItemMenuUnfolded] =
    useState(defaultOpen);

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { getIcon } = useIcons();

  return (
    <>
      {!isRecordItemMenuUnfolded ? (
      <CollapsedContainer>
        <DropdownMenuHeader
          EndIcon={IconChevronRight}
          onClick={() => setIsRecordItemMenuUnfolded(true)}
        >
          {dropdownTitle}
        </DropdownMenuHeader>
        <DropdownMenuSeparator />
        <DropdownMenuItemsContainer>
          {children}
        </DropdownMenuItemsContainer>
      </CollapsedContainer>
      ) : (
        <>
          <ExpandedContainer>
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
            </DropdownMenuItemsContainer>
          </ExpandedContainer>
        </>
      )}
    </>
  );
};
