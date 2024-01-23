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
exports.CreateOneFieldMetadataInput = exports.CreateFieldInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const field_metadata_dto_1 = require("./field-metadata.dto");
let CreateFieldInput = class CreateFieldInput extends (0, graphql_1.OmitType)(field_metadata_dto_1.FieldMetadataDTO, ['id', 'createdAt', 'updatedAt'], graphql_1.InputType) {
};
exports.CreateFieldInput = CreateFieldInput;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateFieldInput.prototype, "objectMetadataId", void 0);
exports.CreateFieldInput = CreateFieldInput = __decorate([
    (0, graphql_1.InputType)()
], CreateFieldInput);
let CreateOneFieldMetadataInput = class CreateOneFieldMetadataInput {
};
exports.CreateOneFieldMetadataInput = CreateOneFieldMetadataInput;
__decorate([
    (0, class_transformer_1.Type)(() => CreateFieldInput),
    (0, class_validator_1.ValidateNested)(),
    (0, graphql_1.Field)(() => CreateFieldInput, {
        description: 'The record to create',
    }),
    __metadata("design:type", CreateFieldInput)
], CreateOneFieldMetadataInput.prototype, "field", void 0);
exports.CreateOneFieldMetadataInput = CreateOneFieldMetadataInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOneFieldMetadataInput);
//# sourceMappingURL=create-field.input.js.map