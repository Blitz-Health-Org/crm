"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMetadataDynamicDefaultValueNow = exports.FieldMetadataDynamicDefaultValueUuid = exports.FieldMetadataDefaultValueFullName = exports.FieldMetadataDefaultValueCurrency = exports.FieldMetadataDefaultValueLink = exports.FieldMetadataDefaultValueDateTime = exports.FieldMetadataDefaultValueStringArray = exports.FieldMetadataDefaultValueBoolean = exports.FieldMetadataDefaultValueNumber = exports.FieldMetadataDefaultValueString = void 0;
const class_validator_1 = require("class-validator");
class FieldMetadataDefaultValueString {
}
exports.FieldMetadataDefaultValueString = FieldMetadataDefaultValueString;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueString.prototype, "value", void 0);
class FieldMetadataDefaultValueNumber {
}
exports.FieldMetadataDefaultValueNumber = FieldMetadataDefaultValueNumber;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueNumber.prototype, "value", void 0);
class FieldMetadataDefaultValueBoolean {
}
exports.FieldMetadataDefaultValueBoolean = FieldMetadataDefaultValueBoolean;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueBoolean.prototype, "value", void 0);
class FieldMetadataDefaultValueStringArray {
}
exports.FieldMetadataDefaultValueStringArray = FieldMetadataDefaultValueStringArray;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueStringArray.prototype, "value", void 0);
class FieldMetadataDefaultValueDateTime {
}
exports.FieldMetadataDefaultValueDateTime = FieldMetadataDefaultValueDateTime;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueDateTime.prototype, "value", void 0);
class FieldMetadataDefaultValueLink {
}
exports.FieldMetadataDefaultValueLink = FieldMetadataDefaultValueLink;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueLink.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueLink.prototype, "url", void 0);
class FieldMetadataDefaultValueCurrency {
}
exports.FieldMetadataDefaultValueCurrency = FieldMetadataDefaultValueCurrency;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueCurrency.prototype, "amountMicros", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueCurrency.prototype, "currencyCode", void 0);
class FieldMetadataDefaultValueFullName {
}
exports.FieldMetadataDefaultValueFullName = FieldMetadataDefaultValueFullName;
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueFullName.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FieldMetadataDefaultValueFullName.prototype, "lastName", void 0);
class FieldMetadataDynamicDefaultValueUuid {
}
exports.FieldMetadataDynamicDefaultValueUuid = FieldMetadataDynamicDefaultValueUuid;
__decorate([
    (0, class_validator_1.Matches)('uuid'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FieldMetadataDynamicDefaultValueUuid.prototype, "type", void 0);
class FieldMetadataDynamicDefaultValueNow {
}
exports.FieldMetadataDynamicDefaultValueNow = FieldMetadataDynamicDefaultValueNow;
__decorate([
    (0, class_validator_1.Matches)('now'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FieldMetadataDynamicDefaultValueNow.prototype, "type", void 0);
//# sourceMappingURL=default-value.input.js.map