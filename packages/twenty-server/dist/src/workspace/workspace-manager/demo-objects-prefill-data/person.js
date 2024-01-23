"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personPrefillData = void 0;
const people_demo_json_1 = __importDefault(require("./people-demo.json"));
const personPrefillData = async (entityManager, schemaName) => {
    const companies = await (entityManager === null || entityManager === void 0 ? void 0 : entityManager.query(`SELECT * FROM ${schemaName}.company`));
    const people = people_demo_json_1.default.map((person, index) => ({
        nameFirstName: person.firstName,
        nameLastName: person.lastName,
        email: person.email,
        linkedinLinkUrl: person.linkedinUrl,
        jobTitle: person.jobTitle,
        city: person.city,
        avatarUrl: person.avatarUrl,
        companyId: companies[Math.floor(index / 2)].id,
    }));
    await entityManager
        .createQueryBuilder()
        .insert()
        .into(`${schemaName}.person`, [
        'nameFirstName',
        'nameLastName',
        'email',
        'linkedinLinkUrl',
        'jobTitle',
        'city',
        'avatarUrl',
        'companyId',
    ])
        .orIgnore()
        .values(people)
        .returning('*')
        .execute();
};
exports.personPrefillData = personPrefillData;
//# sourceMappingURL=person.js.map