import { useState } from 'react';

import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { formatFieldMetadataItemAsColumnDefinition } from '@/object-metadata/utils/formatFieldMetadataItemAsColumnDefinition';
import { parseFieldRelationType } from '@/object-metadata/utils/parseFieldRelationType';
import { FieldContext } from '@/object-record/field/contexts/FieldContext';
import { useFindOneRecord } from '@/object-record/hooks/useFindOneRecord';
import { RecordInlineCell } from '@/object-record/record-inline-cell/components/RecordInlineCell';
import { PropertyBox } from '@/object-record/record-inline-cell/property-box/components/PropertyBox';
import { InlineCellHotkeyScope } from '@/object-record/record-inline-cell/types/InlineCellHotkeyScope';
import { isFieldMetadataItemAvailable } from '@/object-record/utils/isFieldMetadataItemAvailable';
import { IconChevronDown, IconChevronRight } from '@/ui/display/icon';
import { useIcons } from '@/ui/display/icon/hooks/useIcons';
import { DropdownMenuHeader } from '@/ui/layout/dropdown/components/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';
import { HotkeyScope } from '@/ui/utilities/hotkey/types/HotkeyScope';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';
import { FieldMetadataType } from '~/generated/graphql';

export type RecordItemDropdownProps = {
  children: React.ReactNode;
};

//TODO: hotkeyscope?? Not super important
export const RecordItemDropdown = ({children}: RecordItemDropdownProps) => {
  const { record } = useFindOneRecord({
    objectRecordId: '4c4ef523-7f9e-4b7e-9548-73d0ff86dfe1',
    objectNameSingular: 'company',
  });

  const [isRecordItemMenuUnfolded, setIsRecordItemMenuUnfolded] =
    useState(false);

  const { getIcon } = useIcons();

  //NOTE:Everything below is temporary

  const { objectMetadataItem, labelIdentifierFieldMetadata } =
    useObjectMetadataItem({ objectNameSingular: 'company' });

  const availableFieldMetadataItems = objectMetadataItem.fields
    .filter(
      (fieldMetadataItem) =>
        isFieldMetadataItemAvailable(fieldMetadataItem) &&
        fieldMetadataItem.id !== labelIdentifierFieldMetadata?.id,
    )
    .sort((fieldMetadataItemA, fieldMetadataItemB) =>
      fieldMetadataItemA.name.localeCompare(fieldMetadataItemB.name),
    );

  const isRelationFieldCardEnabled = useIsFeatureEnabled(
    'IS_RELATION_FIELD_CARD_ENABLED',
  );
  const inlineFieldMetadataItems = availableFieldMetadataItems.filter(
    (fieldMetadataItem) =>
      fieldMetadataItem.type !== FieldMetadataType.Relation ||
      (!isRelationFieldCardEnabled &&
        parseFieldRelationType(fieldMetadataItem) === 'TO_ONE_OBJECT'),
  );

  return (
    <>
      {!isRecordItemMenuUnfolded ? (
        <DropdownMenuHeader
          EndIcon={IconChevronRight}
          onClick={() => setIsRecordItemMenuUnfolded(true)}
        >
          {'Medical'}
        </DropdownMenuHeader>
      ) : (
        <>
          <DropdownMenuHeader
            EndIcon={IconChevronDown}
            onClick={() => setIsRecordItemMenuUnfolded(false)}
          >
            {'Medical'}
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
