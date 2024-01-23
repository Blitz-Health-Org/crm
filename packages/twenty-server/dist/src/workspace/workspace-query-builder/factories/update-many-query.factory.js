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
exports.UpdateManyQueryFactory = void 0;
const common_1 = require("@nestjs/common");
const stringify_without_key_quote_util_1 = require("../utils/stringify-without-key-quote.util");
const fields_string_factory_1 = require("./fields-string.factory");
const args_alias_factory_1 = require("./args-alias.factory");
const compute_object_target_table_util_1 = require("../../utils/compute-object-target-table.util");
let UpdateManyQueryFactory = class UpdateManyQueryFactory {
    constructor(fieldsStringFactory, argsAliasFactory) {
        this.fieldsStringFactory = fieldsStringFactory;
        this.argsAliasFactory = argsAliasFactory;
    }
    async create(args, options) {
        const fieldsString = await this.fieldsStringFactory.create(options.info, options.fieldMetadataCollection, options.objectMetadataCollection);
        const computedArgs = this.argsAliasFactory.create(args, options.fieldMetadataCollection);
        const argsData = Object.assign(Object.assign({}, computedArgs.data), { updatedAt: new Date().toISOString() });
        return `
    mutation {
      update${(0, compute_object_target_table_util_1.computeObjectTargetTable)(options.objectMetadataItem)}Collection(
        set: ${(0, stringify_without_key_quote_util_1.stringifyWithoutKeyQuote)(argsData)},
        filter: ${(0, stringify_without_key_quote_util_1.stringifyWithoutKeyQuote)(args.filter)},
      ) {
        affectedCount
        records {
          ${fieldsString}
        }
      }
    }`;
    }
};
exports.UpdateManyQueryFactory = UpdateManyQueryFactory;
exports.UpdateManyQueryFactory = UpdateManyQueryFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fields_string_factory_1.FieldsStringFactory,
        args_alias_factory_1.ArgsAliasFactory])
], UpdateManyQueryFactory);
//# sourceMappingURL=update-many-query.factory.js.map