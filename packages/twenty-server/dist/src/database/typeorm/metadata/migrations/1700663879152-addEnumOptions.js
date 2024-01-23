"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEnumOptions1700663879152 = void 0;
class AddEnumOptions1700663879152 {
    constructor() {
        this.name = 'AddEnumOptions1700663879152';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "metadata"."fieldMetadata" RENAME COLUMN "enums" TO "options"`);
        await queryRunner.query(`ALTER TABLE "metadata"."fieldMetadata" DROP COLUMN "options"`);
        await queryRunner.query(`ALTER TABLE "metadata"."fieldMetadata" ADD "options" jsonb`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "metadata"."fieldMetadata" DROP COLUMN "options"`);
        await queryRunner.query(`ALTER TABLE "metadata"."fieldMetadata" ADD "options" text array`);
        await queryRunner.query(`ALTER TABLE "metadata"."fieldMetadata" RENAME COLUMN "options" TO "enums"`);
    }
}
exports.AddEnumOptions1700663879152 = AddEnumOptions1700663879152;
//# sourceMappingURL=1700663879152-addEnumOptions.js.map