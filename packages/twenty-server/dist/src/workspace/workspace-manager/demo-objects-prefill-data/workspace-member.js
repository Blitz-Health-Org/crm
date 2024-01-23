"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceMemberPrefillData = void 0;
const users_1 = require("../../../database/typeorm-seeds/core/demo/users");
const WorkspaceMemberIds = {
    Noah: '20202020-0687-4c41-b707-ed1bfca972a7',
    Hugo: '20202020-77d5-4cb6-b60a-f4a835a85d61',
    Julia: '20202020-1553-45c6-a028-5a9064cce07f',
};
const workspaceMemberPrefillData = async (entityManager, schemaName) => {
    await entityManager
        .createQueryBuilder()
        .insert()
        .into(`${schemaName}.workspaceMember`, [
        'id',
        'nameFirstName',
        'nameLastName',
        'locale',
        'colorScheme',
        'userId',
    ])
        .orIgnore()
        .values([
        {
            id: WorkspaceMemberIds.Noah,
            nameFirstName: 'Noah',
            nameLastName: 'A',
            locale: 'en',
            colorScheme: 'Light',
            userId: users_1.DemoSeedUserIds.Noah,
        },
        {
            id: WorkspaceMemberIds.Hugo,
            nameFirstName: 'Hugo',
            nameLastName: 'I',
            locale: 'en',
            colorScheme: 'Light',
            userId: users_1.DemoSeedUserIds.Hugo,
        },
        {
            id: WorkspaceMemberIds.Julia,
            nameFirstName: 'Julia',
            nameLastName: 'S',
            locale: 'en',
            colorScheme: 'Light',
            userId: users_1.DemoSeedUserIds.Julia,
        },
    ])
        .execute();
};
exports.workspaceMemberPrefillData = workspaceMemberPrefillData;
//# sourceMappingURL=workspace-member.js.map