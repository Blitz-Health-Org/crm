import { IconDotsVertical, IconDownload, IconTrash, IconFileSpreadsheet } from '@/ui/display/icon';
import { LightIconButton } from '@/ui/input/button/components/LightIconButton';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { DropdownMenu } from '@/ui/layout/dropdown/components/DropdownMenu';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import styled from '@emotion/styled';

const StyledEmployerInfoContainer = styled.div`
  background: ${({ theme }) => theme.background.secondary};
`;

type AttachmentDropdownProps = {
  onDownload: () => void;
  onDelete?: () => void;
  scopeKey: string;
  allowDelete?: boolean;
};

export const AttachmentDropdown = ({
  onDownload,
  onDelete = () => {},
  scopeKey,
  allowDelete = true,
}: AttachmentDropdownProps) => {
  const dropdownId = `${scopeKey}-settings-field-active-action-dropdown`;

  const { closeDropdown } = useDropdown(dropdownId);

  const handleDownload = () => {
    onDownload();
    closeDropdown();
  };

  const handleDelete = () => {
    if (!allowDelete) return;

    onDelete();
    closeDropdown();
  };

  return (
    <StyledEmployerInfoContainer>
    <Dropdown
      dropdownId={dropdownId}
      clickableComponent={
        <LightIconButton Icon={IconDownload} accent="tertiary" />
      }
      dropdownComponents={
        <DropdownMenu width="160px">
          <DropdownMenuItemsContainer>
            <MenuItem
              text="Excel"
              LeftIcon={IconFileSpreadsheet}
              onClick={handleDownload}
            />
            {allowDelete && (
              <MenuItem
                text="Delete"
                accent="danger"
                LeftIcon={IconTrash}
                onClick={handleDelete}
              />
            )}
          </DropdownMenuItemsContainer>
        </DropdownMenu>
      }
      dropdownHotkeyScope={{
        scope: dropdownId,
      }}
    />
    </StyledEmployerInfoContainer>
  );
};
