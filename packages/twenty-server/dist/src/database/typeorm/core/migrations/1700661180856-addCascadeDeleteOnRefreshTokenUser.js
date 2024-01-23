"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCascadeDeleteOnRefreshTokenUser1700661180856 = void 0;
class AddCascadeDeleteOnRefreshTokenUser1700661180856 {
    constructor() {
        this.name = 'AddCascadeDeleteOnRefreshTokenUser1700661180856';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "core"."refreshToken" DROP CONSTRAINT "FK_7008a2b0fb083127f60b5f4448e"`);
        await queryRunner.query(`ALTER TABLE "core"."refreshToken" ADD CONSTRAINT "FK_7008a2b0fb083127f60b5f4448e" FOREIGN KEY ("userId") REFERENCES "core"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "core"."refreshToken" DROP CONSTRAINT "FK_7008a2b0fb083127f60b5f4448e"`);
        await queryRunner.query(`ALTER TABLE "core"."refreshToken" ADD CONSTRAINT "FK_7008a2b0fb083127f60b5f4448e" FOREIGN KEY ("userId") REFERENCES "core"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.AddCascadeDeleteOnRefreshTokenUser1700661180856 = AddCascadeDeleteOnRefreshTokenUser1700661180856;
//# sourceMappingURL=1700661180856-addCascadeDeleteOnRefreshTokenUser.js.map