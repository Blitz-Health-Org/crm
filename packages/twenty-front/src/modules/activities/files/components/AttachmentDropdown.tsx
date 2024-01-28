import { IconDotsVertical, IconDownload, IconTrash, IconFileSpreadsheet } from '@/ui/display/icon';
import { LightIconButton } from '@/ui/input/button/components/LightIconButton';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { DropdownMenu } from '@/ui/layout/dropdown/components/DropdownMenu';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import styled from '@emotion/styled';

const GrayLightIconButton = styled(LightIconButton)`
  // Add your custom styling here
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  background: ${({ theme }) => theme.background.secondary};
  // Add any other styles you want to customize
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
    <Dropdown
      dropdownId={dropdownId}
      clickableComponent={
        <GrayLightIconButton Icon={IconDownload} accent="tertiary" />
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
  );
};
