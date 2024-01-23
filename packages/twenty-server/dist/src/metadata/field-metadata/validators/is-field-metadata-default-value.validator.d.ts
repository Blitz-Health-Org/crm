import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { FieldMetadataDefaultValue } from 'src/metadata/field-metadata/interfaces/field-metadata-default-value.interface';
import { FieldMetadataService } from 'src/metadata/field-metadata/field-metadata.service';
export declare class IsFieldMetadataDefaultValue implements ValidatorConstraintInterface {
    private readonly fieldMetadataService;
    constructor(fieldMetadataService: FieldMetadataService);
    validate(value: FieldMetadataDefaultValue, args: ValidationArguments): Promise<boolean>;
    defaultMessage(): string;
}
