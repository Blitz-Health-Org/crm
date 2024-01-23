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
exports.IsFieldMetadataOptions = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const field_metadata_service_1 = require("../field-metadata.service");
const validate_options_for_type_util_1 = require("../utils/validate-options-for-type.util");
let IsFieldMetadataOptions = class IsFieldMetadataOptions {
    constructor(fieldMetadataService) {
        this.fieldMetadataService = fieldMetadataService;
    }
    async validate(value, args) {
        var _a;
        let type = args.object['type'];
        if (!type) {
            const id = (_a = args.instance) === null || _a === void 0 ? void 0 : _a['id'];
            if (!id) {
                return false;
            }
            let fieldMetadata;
            try {
                fieldMetadata = await this.fieldMetadataService.findOneOrFail(id);
            }
            catch (_b) {
                return false;
            }
            type = fieldMetadata.type;
        }
        return (0, validate_options_for_type_util_1.validateOptionsForType)(type, value);
    }
    defaultMessage() {
        return 'FieldMetadataOptions is not valid';
    }
};
exports.IsFieldMetadataOptions = IsFieldMetadataOptions;
exports.IsFieldMetadataOptions = IsFieldMetadataOptions = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ name: 'isFieldMetadataOptions', async: true }),
    __metadata("design:paramtypes", [field_metadata_service_1.FieldMetadataService])
], IsFieldMetadataOptions);
//# sourceMappingURL=is-field-metadata-options.validator.js.map