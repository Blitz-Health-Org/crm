"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStrictlyLowerThan = void 0;
const class_validator_1 = require("class-validator");
const IsStrictlyLowerThan = (property, validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isStrictlyLowerThan',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return (typeof value === 'number' &&
                        typeof relatedValue === 'number' &&
                        value < relatedValue);
                },
            },
        });
    };
};
exports.IsStrictlyLowerThan = IsStrictlyLowerThan;
//# sourceMappingURL=is-strictly-lower-than.decorator.js.map