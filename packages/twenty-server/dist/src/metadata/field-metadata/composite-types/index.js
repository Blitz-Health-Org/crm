"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compositeDefinitions = void 0;
const currency_composite_type_1 = require("./currency.composite-type");
const full_name_composite_type_1 = require("./full-name.composite-type");
const link_composite_type_1 = require("./link.composite-type");
const field_metadata_entity_1 = require("../field-metadata.entity");
exports.compositeDefinitions = new Map([
    [field_metadata_entity_1.FieldMetadataType.LINK, link_composite_type_1.linkFields],
    [field_metadata_entity_1.FieldMetadataType.CURRENCY, currency_composite_type_1.currencyFields],
    [field_metadata_entity_1.FieldMetadataType.FULL_NAME, full_name_composite_type_1.fullNameFields],
]);
//# sourceMappingURL=index.js.map