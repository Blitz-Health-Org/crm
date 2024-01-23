"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptionsForType = exports.optionsValidatorsMap = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const field_metadata_entity_1 = require("../field-metadata.entity");
const options_input_1 = require("../dtos/options.input");
exports.optionsValidatorsMap = {
    [field_metadata_entity_1.FieldMetadataType.RATING]: [options_input_1.FieldMetadataDefaultOptions],
    [field_metadata_entity_1.FieldMetadataType.SELECT]: [options_input_1.FieldMetadataComplexOptions],
    [field_metadata_entity_1.FieldMetadataType.MULTI_SELECT]: [options_input_1.FieldMetadataComplexOptions],
};
const validateOptionsForType = (type, options) => {
    if (options === null)
        return true;
    if (!Array.isArray(options)) {
        return false;
    }
    const validators = exports.optionsValidatorsMap[type];
    if (!validators)
        return false;
    const isValid = options.every((option) => {
        return validators.some((validator) => {
            const optionsInstance = (0, class_transformer_1.plainToInstance)(validator, option);
            return ((0, class_validator_1.validateSync)(optionsInstance, {
                whitelist: true,
                forbidNonWhitelisted: true,
                forbidUnknownValues: true,
            }).length === 0);
        });
    });
    return isValid;
};
exports.validateOptionsForType = validateOptionsForType;
//# sourceMappingURL=validate-options-for-type.util.js.map