"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterInputFactory = void 0;
const common_1 = require("@nestjs/common");
const add_default_conjunction_utils_1 = require("./filter-utils/add-default-conjunction.utils");
const check_filter_query_utils_1 = require("./filter-utils/check-filter-query.utils");
const parse_filter_utils_1 = require("./filter-utils/parse-filter.utils");
let FilterInputFactory = class FilterInputFactory {
    create(request, objectMetadata) {
        let filterQuery = request.query.filter;
        if (typeof filterQuery !== 'string') {
            return {};
        }
        (0, check_filter_query_utils_1.checkFilterQuery)(filterQuery);
        filterQuery = (0, add_default_conjunction_utils_1.addDefaultConjunctionIfMissing)(filterQuery);
        return (0, parse_filter_utils_1.parseFilter)(filterQuery, objectMetadata.objectMetadataItem);
    }
};
exports.FilterInputFactory = FilterInputFactory;
exports.FilterInputFactory = FilterInputFactory = __decorate([
    (0, common_1.Injectable)()
], FilterInputFactory);
//# sourceMappingURL=filter-input.factory.js.map