"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSubscriptionStatusOnWorkspace1702479005171 = void 0;
class AddSubscriptionStatusOnWorkspace1702479005171 {
    constructor() {
        this.name = 'AddSubscriptionStatusOnWorkspace1702479005171';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "core"."workspace" ADD "subscriptionStatus" character varying NOT NULL DEFAULT 'incomplete'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "core"."workspace" DROP COLUMN "subscriptionStatus"`);
    }
}
exports.AddSubscriptionStatusOnWorkspace1702479005171 = AddSubscriptionStatusOnWorkspace1702479005171;
//# sourceMappingURL=1702479005171-addSubscriptionStatusOnWorkspace.js.map