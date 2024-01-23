"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDefaultValueForType = exports.defaultValueValidatorsMap = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const field_metadata_entity_1 = require("../field-metadata.entity");
const default_value_input_1 = require("../dtos/default-value.input");
exports.defaultValueValidatorsMap = {
    [field_metadata_entity_1.FieldMetadataType.UUID]: [
        default_value_input_1.FieldMetadataDefaultValueString,
        default_value_input_1.FieldMetadataDynamicDefaultValueUuid,
    ],
    [field_metadata_entity_1.FieldMetadataType.TEXT]: [default_value_input_1.FieldMetadataDefaultValueString],
    [field_metadata_entity_1.FieldMetadataType.PHONE]: [default_value_input_1.FieldMetadataDefaultValueString],
    [field_metadata_entity_1.FieldMetadataType.EMAIL]: [default_value_input_1.FieldMetadataDefaultValueString],
    [field_metadata_entity_1.FieldMetadataType.DATE_TIME]: [
        default_value_input_1.FieldMetadataDefaultValueDateTime,
        default_value_input_1.FieldMetadataDynamicDefaultValueNow,
    ],
    [field_metadata_entity_1.FieldMetadataType.BOOLEAN]: [default_value_input_1.FieldMetadataDefaultValueBoolean],
    [field_metadata_entity_1.FieldMetadataType.NUMBER]: [default_value_input_1.FieldMetadataDefaultValueNumber],
    [field_metadata_entity_1.FieldMetadataType.NUMERIC]: [default_value_input_1.FieldMetadataDefaultValueString],
    [field_metadata_entity_1.FieldMetadataType.PROBABILITY]: [default_value_input_1.FieldMetadataDefaultValueNumber],
    [field_metadata_entity_1.FieldMetadataType.LINK]: [default_value_input_1.FieldMetadataDefaultValueLink],
    [field_metadata_entity_1.FieldMetadataType.CURRENCY]: [default_value_input_1.FieldMetadataDefaultValueCurrency],
    [field_metadata_entity_1.FieldMetadataType.FULL_NAME]: [default_value_input_1.FieldMetadataDefaultValueFullName],
    [field_metadata_entity_1.FieldMetadataType.RATING]: [default_value_input_1.FieldMetadataDefaultValueString],
    [field_metadata_entity_1.FieldMetadataType.SELECT]: [default_value_input_1.FieldMetadataDefaultValueString],
    [field_metadata_entity_1.FieldMetadataType.MULTI_SELECT]: [default_value_input_1.FieldMetadataDefaultValueStringArray],
};
const validateDefaultValueForType = (type, defaultValue) => {
    if (defaultValue === null)
        return true;
    const validators = exports.defaultValueValidatorsMap[type];
    if (!validators)
        return false;
    const isValid = validators.some((validator) => {
        const defaultValueInstance = (0, class_transformer_1.plainToInstance)(validator, defaultValue);
        return ((0, class_validator_1.validateSync)(defaultValueInstance, {
            whitelist: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true,
        }).length === 0);
    });
    return isValid;
};
exports.validateDefaultValueForType = validateDefaultValueForType;
//# sourceMappingURL=validate-default-value-for-type.util.js.map