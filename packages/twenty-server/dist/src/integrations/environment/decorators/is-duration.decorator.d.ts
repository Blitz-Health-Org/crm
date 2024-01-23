import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsDurationConstraint implements ValidatorConstraintInterface {
    validate(duration: string): boolean;
}
export declare const IsDuration: (validationOptions?: ValidationOptions) => (object: object, propertyName: string) => void;
