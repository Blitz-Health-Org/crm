"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAWSRegion = exports.IsAWSRegionConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsAWSRegionConstraint = class IsAWSRegionConstraint {
    validate(region) {
        const regex = /^[a-z]{2}-[a-z]+-\d{1}$/;
        return regex.test(region);
    }
};
exports.IsAWSRegionConstraint = IsAWSRegionConstraint;
exports.IsAWSRegionConstraint = IsAWSRegionConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], IsAWSRegionConstraint);
const IsAWSRegion = (validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsAWSRegionConstraint,
    });
};
exports.IsAWSRegion = IsAWSRegion;
//# sourceMappingURL=is-aws-region.decorator.js.map