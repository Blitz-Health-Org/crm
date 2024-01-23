"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWorkspaceDeleteCascadeSetNullInUser1700663611659 = void 0;
class AddWorkspaceDeleteCascadeSetNullInUser1700663611659 {
    constructor() {
        this.name = 'AddWorkspaceDeleteCascadeSetNullInUser1700663611659';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "core"."user" DROP CONSTRAINT "FK_2ec910029395fa7655621c88908"`);
        await queryRunner.query(`ALTER TABLE "core"."user" ADD CONSTRAINT "FK_2ec910029395fa7655621c88908" FOREIGN KEY ("defaultWorkspaceId") REFERENCES "core"."workspace"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "core"."user" DROP CONSTRAINT "FK_2ec910029395fa7655621c88908"`);
        await queryRunner.query(`ALTER TABLE "core"."user" ADD CONSTRAINT "FK_2ec910029395fa7655621c88908" FOREIGN KEY ("defaultWorkspaceId") REFERENCES "core"."workspace"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.AddWorkspaceDeleteCascadeSetNullInUser1700663611659 = AddWorkspaceDeleteCascadeSetNullInUser1700663611659;
//# sourceMappingURL=1700663611659-addWorkspaceDeleteCascadeSetNullInUser.js.map