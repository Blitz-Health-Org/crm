import { ValidationArguments } from 'class-validator';
import { FieldMetadataOptions } from 'src/metadata/field-metadata/interfaces/field-metadata-options.interface';
import { FieldMetadataService } from 'src/metadata/field-metadata/field-metadata.service';
export declare class IsFieldMetadataOptions {
    private readonly fieldMetadataService;
    constructor(fieldMetadataService: FieldMetadataService);
    validate(value: FieldMetadataOptions, args: ValidationArguments): Promise<boolean>;
    defaultMessage(): string;
}
