import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsAWSRegionConstraint implements ValidatorConstraintInterface {
    validate(region: string): boolean;
}
export declare const IsAWSRegion: (validationOptions?: ValidationOptions) => (object: object, propertyName: string) => void;
