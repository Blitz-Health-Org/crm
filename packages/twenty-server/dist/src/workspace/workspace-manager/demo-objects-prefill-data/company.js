"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyPrefillData = void 0;
const companies_demo_json_1 = __importDefault(require("./companies-demo.json"));
const companyPrefillData = async (entityManager, schemaName) => {
    await entityManager
        .createQueryBuilder()
        .insert()
        .into(`${schemaName}.company`, [
        'name',
        'domainName',
        'address',
        'employees',
        'linkedinLinkUrl',
    ])
        .orIgnore()
        .values(companies_demo_json_1.default)
        .returning('*')
        .execute();
};
exports.companyPrefillData = companyPrefillData;
//# sourceMappingURL=company.js.map