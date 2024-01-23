"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FieldAliasFacotry_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAliasFacotry = void 0;
const common_1 = require("@nestjs/common");
let FieldAliasFacotry = FieldAliasFacotry_1 = class FieldAliasFacotry {
    constructor() {
        this.logger = new common_1.Logger(FieldAliasFacotry_1.name);
    }
    create(fieldKey, fieldMetadata) {
        const entries = Object.entries(fieldMetadata.targetColumnMap);
        if (entries.length === 0) {
            return null;
        }
        if (entries.length === 1) {
            const alias = entries[0][1];
            return `${fieldKey}: ${alias}`;
        }
        return `
      ${entries
            .map(([key, value]) => `___${fieldMetadata.name}_${key}: ${value}`)
            .join('\n')}
    `;
    }
};
exports.FieldAliasFacotry = FieldAliasFacotry;
exports.FieldAliasFacotry = FieldAliasFacotry = FieldAliasFacotry_1 = __decorate([
    (0, common_1.Injectable)()
], FieldAliasFacotry);
//# sourceMappingURL=field-alias.factory.js.map