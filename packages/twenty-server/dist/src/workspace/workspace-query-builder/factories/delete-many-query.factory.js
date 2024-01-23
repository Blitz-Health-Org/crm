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
exports.DeleteManyQueryFactory = void 0;
const common_1 = require("@nestjs/common");
const stringify_without_key_quote_util_1 = require("../utils/stringify-without-key-quote.util");
const compute_object_target_table_util_1 = require("../../utils/compute-object-target-table.util");
const fields_string_factory_1 = require("./fields-string.factory");
let DeleteManyQueryFactory = class DeleteManyQueryFactory {
    constructor(fieldsStringFactory) {
        this.fieldsStringFactory = fieldsStringFactory;
    }
    async create(args, options) {
        const fieldsString = await this.fieldsStringFactory.create(options.info, options.fieldMetadataCollection, options.objectMetadataCollection);
        return `
      mutation {
        deleteFrom${(0, compute_object_target_table_util_1.computeObjectTargetTable)(options.objectMetadataItem)}Collection(filter: ${(0, stringify_without_key_quote_util_1.stringifyWithoutKeyQuote)(args.filter)}, atMost: 30) {
          affectedCount
          records {
            ${fieldsString}
          }
        }
      }
    `;
    }
};
exports.DeleteManyQueryFactory = DeleteManyQueryFactory;
exports.DeleteManyQueryFactory = DeleteManyQueryFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fields_string_factory_1.FieldsStringFactory])
], DeleteManyQueryFactory);
//# sourceMappingURL=delete-many-query.factory.js.map