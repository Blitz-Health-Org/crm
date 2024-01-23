"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsersByWorkspace = exports.seedUsers = exports.DemoSeedUserIds = void 0;
const tableName = 'user';
var DemoSeedUserIds;
(function (DemoSeedUserIds) {
    DemoSeedUserIds["Noah"] = "20202020-9e3b-46d4-a556-88b9ddc2b035";
    DemoSeedUserIds["Hugo"] = "20202020-3957-4908-9c36-2929a23f8358";
    DemoSeedUserIds["Julia"] = "20202020-7169-42cf-bc47-1cfef15264b9";
})(DemoSeedUserIds || (exports.DemoSeedUserIds = DemoSeedUserIds = {}));
const seedUsers = async (workspaceDataSource, schemaName, workspaceId) => {
    await workspaceDataSource
        .createQueryBuilder()
        .insert()
        .into(`${schemaName}.${tableName}`, [
        'id',
        'firstName',
        'lastName',
        'email',
        'passwordHash',
        'defaultWorkspaceId',
    ])
        .orIgnore()
        .values([
        {
            id: DemoSeedUserIds.Noah,
            firstName: 'Noah',
            lastName: 'A',
            email: 'noah@demo.dev',
            passwordHash: '$2b$10$66d.6DuQExxnrfI9rMqOg.U1XIYpagr6Lv05uoWLYbYmtK0HDIvS6',
            defaultWorkspaceId: workspaceId,
        },
        {
            id: DemoSeedUserIds.Hugo,
            firstName: 'Hugo',
            lastName: 'I',
            email: 'hugo@demo.dev',
            passwordHash: '$2b$10$66d.6DuQExxnrfI9rMqOg.U1XIYpagr6Lv05uoWLYbYmtK0HDIvS6',
            defaultWorkspaceId: workspaceId,
        },
        ,
        {
            id: DemoSeedUserIds.Julia,
            firstName: 'Julia',
            lastName: 'S',
            email: 'julia.s@demo.dev',
            passwordHash: '$2b$10$66d.6DuQExxnrfI9rMqOg.U1XIYpagr6Lv05uoWLYbYmtK0HDIvS6',
            defaultWorkspaceId: workspaceId,
        },
    ])
        .execute();
};
exports.seedUsers = seedUsers;
const deleteUsersByWorkspace = async (workspaceDataSource, schemaName, workspaceId) => {
    await workspaceDataSource
        .createQueryBuilder()
        .delete()
        .from(`${schemaName}.${tableName}`)
        .where(`"${tableName}"."defaultWorkspaceId" = :workspaceId`, {
        workspaceId,
    })
        .execute();
};
exports.deleteUsersByWorkspace = deleteUsersByWorkspace;
//# sourceMappingURL=users.js.map