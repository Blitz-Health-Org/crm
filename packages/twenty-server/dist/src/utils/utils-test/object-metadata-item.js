"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectMetadataItem = exports.fieldCurrency = exports.fieldLink = exports.fieldString = exports.fieldNumber = void 0;
const field_metadata_entity_1 = require("../../metadata/field-metadata/field-metadata.entity");
exports.fieldNumber = {
    name: 'fieldNumber',
    type: field_metadata_entity_1.FieldMetadataType.NUMBER,
    isNullable: false,
    defaultValue: null,
    targetColumnMap: { value: 'fieldNumber' },
};
exports.fieldString = {
    name: 'fieldString',
    type: field_metadata_entity_1.FieldMetadataType.TEXT,
    isNullable: true,
    defaultValue: null,
    targetColumnMap: { value: 'fieldString' },
};
exports.fieldLink = {
    name: 'fieldLink',
    type: field_metadata_entity_1.FieldMetadataType.LINK,
    isNullable: false,
    defaultValue: { label: '', url: '' },
    targetColumnMap: { label: 'fieldLinkLabel', url: 'fieldLinkUrl' },
};
exports.fieldCurrency = {
    name: 'fieldCurrency',
    type: field_metadata_entity_1.FieldMetadataType.CURRENCY,
    isNullable: true,
    defaultValue: null,
    targetColumnMap: {
        amountMicros: 'fieldCurrencyAmountMicros',
        currencyCode: 'fieldCurrencyCurrencyCode',
    },
};
exports.objectMetadataItem = {
    targetTableName: 'testingObject',
    nameSingular: 'objectName',
    namePlural: 'objectsName',
    fields: [exports.fieldNumber, exports.fieldString, exports.fieldLink, exports.fieldCurrency],
};
//# sourceMappingURL=object-metadata-item.js.map