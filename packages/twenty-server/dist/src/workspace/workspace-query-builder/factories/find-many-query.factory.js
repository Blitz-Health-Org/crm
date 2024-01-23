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
var FindManyQueryFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyQueryFactory = void 0;
const common_1 = require("@nestjs/common");
const compute_object_target_table_util_1 = require("../../utils/compute-object-target-table.util");
const args_string_factory_1 = require("./args-string.factory");
const fields_string_factory_1 = require("./fields-string.factory");
let FindManyQueryFactory = FindManyQueryFactory_1 = class FindManyQueryFactory {
    constructor(fieldsStringFactory, argsStringFactory) {
        this.fieldsStringFactory = fieldsStringFactory;
        this.argsStringFactory = argsStringFactory;
        this.logger = new common_1.Logger(FindManyQueryFactory_1.name);
    }
    async create(args, options) {
        const fieldsString = await this.fieldsStringFactory.create(options.info, options.fieldMetadataCollection, options.objectMetadataCollection);
        const argsString = this.argsStringFactory.create(args, options.fieldMetadataCollection);
        return `
      query {
        ${(0, compute_object_target_table_util_1.computeObjectTargetTable)(options.objectMetadataItem)}Collection${argsString ? `(${argsString})` : ''} {
          ${fieldsString}
        }
      }
    `;
    }
};
exports.FindManyQueryFactory = FindManyQueryFactory;
exports.FindManyQueryFactory = FindManyQueryFactory = FindManyQueryFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fields_string_factory_1.FieldsStringFactory,
        args_string_factory_1.ArgsStringFactory])
], FindManyQueryFactory);
//# sourceMappingURL=find-many-query.factory.js.map