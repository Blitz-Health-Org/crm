import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
export declare class FieldAliasFacotry {
    private readonly logger;
    create(fieldKey: string, fieldMetadata: FieldMetadataInterface): string | null;
}
