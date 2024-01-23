"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQueryFactory = void 0;
const common_1 = require("@nestjs/common");
const capitalize_1 = require("../../../../utils/capitalize");
let DeleteQueryFactory = class DeleteQueryFactory {
    create(objectMetadataItem) {
        const objectNameSingular = (0, capitalize_1.capitalize)(objectMetadataItem.nameSingular);
        return `
      mutation Delete${objectNameSingular}($id: ID!) {
        delete${objectNameSingular}(id: $id) {
          id
        }
      }
    `;
    }
};
exports.DeleteQueryFactory = DeleteQueryFactory;
exports.DeleteQueryFactory = DeleteQueryFactory = __decorate([
    (0, common_1.Injectable)()
], DeleteQueryFactory);
//# sourceMappingURL=delete-query.factory.js.map