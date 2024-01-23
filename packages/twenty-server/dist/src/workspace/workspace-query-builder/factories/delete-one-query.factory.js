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
var DeleteOneQueryFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneQueryFactory = void 0;
const common_1 = require("@nestjs/common");
const compute_object_target_table_util_1 = require("../../utils/compute-object-target-table.util");
const fields_string_factory_1 = require("./fields-string.factory");
let DeleteOneQueryFactory = DeleteOneQueryFactory_1 = class DeleteOneQueryFactory {
    constructor(fieldsStringFactory) {
        this.fieldsStringFactory = fieldsStringFactory;
        this.logger = new common_1.Logger(DeleteOneQueryFactory_1.name);
    }
    async create(args, options) {
        const fieldsString = await this.fieldsStringFactory.create(options.info, options.fieldMetadataCollection, options.objectMetadataCollection);
        return `
      mutation {
        deleteFrom${(0, compute_object_target_table_util_1.computeObjectTargetTable)(options.objectMetadataItem)}Collection(filter: { id: { eq: "${args.id}" } }) {
          affectedCount
          records {
            ${fieldsString}
          }
        }
      }
    `;
    }
};
exports.DeleteOneQueryFactory = DeleteOneQueryFactory;
exports.DeleteOneQueryFactory = DeleteOneQueryFactory = DeleteOneQueryFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fields_string_factory_1.FieldsStringFactory])
], DeleteOneQueryFactory);
//# sourceMappingURL=delete-one-query.factory.js.map