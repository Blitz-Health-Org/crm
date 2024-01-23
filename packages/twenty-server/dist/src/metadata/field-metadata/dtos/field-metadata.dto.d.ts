import { FieldMetadataOptions } from 'src/metadata/field-metadata/interfaces/field-metadata-options.interface';
import { FieldMetadataDefaultValue } from 'src/metadata/field-metadata/interfaces/field-metadata-default-value.interface';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
export declare class FieldMetadataDTO<T extends FieldMetadataType | 'default' = 'default'> {
    id: string;
    type: FieldMetadataType;
    name: string;
    label: string;
    description?: string;
    icon?: string;
    isCustom?: boolean;
    isActive?: boolean;
    isSystem?: boolean;
    isNullable?: boolean;
    defaultValue?: FieldMetadataDefaultValue<T>;
    options?: FieldMetadataOptions<T>;
    workspaceId: string;
    createdAt: Date;
    updatedAt: Date;
}
