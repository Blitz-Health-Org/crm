"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderByInputFactory = exports.DEFAULT_ORDER_DIRECTION = void 0;
const common_1 = require("@nestjs/common");
const record_interface_1 = require("../../../../../workspace/workspace-query-builder/interfaces/record.interface");
const fields_utils_1 = require("../../utils/fields.utils");
exports.DEFAULT_ORDER_DIRECTION = record_interface_1.OrderByDirection.AscNullsFirst;
let OrderByInputFactory = class OrderByInputFactory {
    create(request, objectMetadata) {
        const orderByQuery = request.query.order_by;
        if (typeof orderByQuery !== 'string') {
            return {};
        }
        const orderByItems = orderByQuery.split(',');
        let result = {};
        let itemDirection = '';
        let itemFields = '';
        for (const orderByItem of orderByItems) {
            if (orderByItem.includes('[') && orderByItem.includes(']')) {
                const [fieldsString, direction] = orderByItem
                    .replace(']', '')
                    .split('[');
                if (!(direction in record_interface_1.OrderByDirection)) {
                    throw new common_1.BadRequestException(`'order_by' direction '${direction}' invalid. Allowed values are '${Object.values(record_interface_1.OrderByDirection).join("', '")}'. eg: ?order_by=field_1[AscNullsFirst],field_2[DescNullsLast],field_3`);
                }
                itemDirection = direction;
                itemFields = fieldsString;
            }
            else {
                itemDirection = exports.DEFAULT_ORDER_DIRECTION;
                itemFields = orderByItem;
            }
            let fieldResult = {};
            itemFields
                .split('.')
                .reverse()
                .forEach((field) => {
                if (Object.keys(fieldResult).length) {
                    fieldResult = { [field]: fieldResult };
                }
                else {
                    fieldResult[field] = itemDirection;
                }
            }, itemDirection);
            result = Object.assign(Object.assign({}, result), fieldResult);
        }
        (0, fields_utils_1.checkFields)(objectMetadata.objectMetadataItem, Object.keys(result));
        return result;
    }
};
exports.OrderByInputFactory = OrderByInputFactory;
exports.OrderByInputFactory = OrderByInputFactory = __decorate([
    (0, common_1.Injectable)()
], OrderByInputFactory);
//# sourceMappingURL=order-by-input.factory.js.map