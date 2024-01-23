"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWorkspaceCacheVersion1700650554672 = void 0;
class AddWorkspaceCacheVersion1700650554672 {
    constructor() {
        this.name = 'AddWorkspaceCacheVersion1700650554672';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "metadata"."workspaceCacheVersion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "workspaceId" uuid NOT NULL, "version" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1a80ecf2638b477809403cc26ed" UNIQUE ("workspaceId"), CONSTRAINT "PK_5d502f8dbfb5b9a8bf2439320e9" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "metadata"."workspaceCacheVersion"`);
    }
}
exports.AddWorkspaceCacheVersion1700650554672 = AddWorkspaceCacheVersion1700650554672;
//# sourceMappingURL=1700650554672-addWorkspaceCacheVersion.js.map