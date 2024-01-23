"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCascadeDeleteOnRelationObject1700661538754 = void 0;
class AddCascadeDeleteOnRelationObject1700661538754 {
    constructor() {
        this.name = 'AddCascadeDeleteOnRelationObject1700661538754';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" DROP CONSTRAINT "FK_0f781f589e5a527b8f3d3a4b824"`);
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" DROP CONSTRAINT "FK_f2a0acd3a548ee446a1a35df44d"`);
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" ADD CONSTRAINT "FK_f2a0acd3a548ee446a1a35df44d" FOREIGN KEY ("fromObjectMetadataId") REFERENCES "metadata"."objectMetadata"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" ADD CONSTRAINT "FK_0f781f589e5a527b8f3d3a4b824" FOREIGN KEY ("toObjectMetadataId") REFERENCES "metadata"."objectMetadata"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" DROP CONSTRAINT "FK_0f781f589e5a527b8f3d3a4b824"`);
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" DROP CONSTRAINT "FK_f2a0acd3a548ee446a1a35df44d"`);
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" ADD CONSTRAINT "FK_f2a0acd3a548ee446a1a35df44d" FOREIGN KEY ("fromObjectMetadataId") REFERENCES "metadata"."objectMetadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "metadata"."relationMetadata" ADD CONSTRAINT "FK_0f781f589e5a527b8f3d3a4b824" FOREIGN KEY ("toObjectMetadataId") REFERENCES "metadata"."objectMetadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.AddCascadeDeleteOnRelationObject1700661538754 = AddCascadeDeleteOnRelationObject1700661538754;
//# sourceMappingURL=1700661538754-addCascadeDeleteOnRelationObject.js.map