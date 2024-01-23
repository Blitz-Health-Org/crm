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
exports.GetVariablesFactory = void 0;
const common_1 = require("@nestjs/common");
const last_cursor_input_factory_1 = require("./input-factories/last-cursor-input.factory");
const limit_input_factory_1 = require("./input-factories/limit-input.factory");
const order_by_input_factory_1 = require("./input-factories/order-by-input.factory");
const filter_input_factory_1 = require("./input-factories/filter-input.factory");
let GetVariablesFactory = class GetVariablesFactory {
    constructor(lastCursorInputFactory, limitInputFactory, orderByInputFactory, filterInputFactory) {
        this.lastCursorInputFactory = lastCursorInputFactory;
        this.limitInputFactory = limitInputFactory;
        this.orderByInputFactory = orderByInputFactory;
        this.filterInputFactory = filterInputFactory;
    }
    create(id, request, objectMetadata) {
        if (id) {
            return { filter: { id: { eq: id } } };
        }
        return {
            filter: this.filterInputFactory.create(request, objectMetadata),
            orderBy: this.orderByInputFactory.create(request, objectMetadata),
            limit: this.limitInputFactory.create(request),
            lastCursor: this.lastCursorInputFactory.create(request),
        };
    }
};
exports.GetVariablesFactory = GetVariablesFactory;
exports.GetVariablesFactory = GetVariablesFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [last_cursor_input_factory_1.LastCursorInputFactory,
        limit_input_factory_1.LimitInputFactory,
        order_by_input_factory_1.OrderByInputFactory,
        filter_input_factory_1.FilterInputFactory])
], GetVariablesFactory);
//# sourceMappingURL=get-variables.factory.js.map