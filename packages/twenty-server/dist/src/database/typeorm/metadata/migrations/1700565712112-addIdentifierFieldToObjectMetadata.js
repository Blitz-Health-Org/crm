"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIdentifierFieldToObjectMetadata1700565712112 = void 0;
class AddIdentifierFieldToObjectMetadata1700565712112 {
    constructor() {
        this.name = 'AddIdentifierFieldToObjectMetadata1700565712112';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "metadata"."objectMetadata" ADD "labelIdentifierFieldMetadataId" character varying`);
        await queryRunner.query(`ALTER TABLE "metadata"."objectMetadata" ADD "imageIdentifierFieldMetadataId" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "metadata"."objectMetadata" DROP COLUMN "imageIdentifierFieldMetadataId"`);
        await queryRunner.query(`ALTER TABLE "metadata"."objectMetadata" DROP COLUMN "labelIdentifierFieldMetadataId"`);
    }
}
exports.AddIdentifierFieldToObjectMetadata1700565712112 = AddIdentifierFieldToObjectMetadata1700565712112;
//# sourceMappingURL=1700565712112-addIdentifierFieldToObjectMetadata.js.map