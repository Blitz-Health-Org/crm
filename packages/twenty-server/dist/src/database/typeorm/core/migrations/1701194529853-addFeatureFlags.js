"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFeatureFlags1701194529853 = void 0;
class AddFeatureFlags1701194529853 {
    constructor() {
        this.name = 'AddFeatureFlags1701194529853';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "core"."featureFlag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "key" text NOT NULL, "workspaceId" uuid NOT NULL, "value" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "IndexOnKeyAndWorkspaceIdUnique" UNIQUE ("key", "workspaceId"), CONSTRAINT "PK_894efa1b1822de801f3b9e04069" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "core"."featureFlag" ADD CONSTRAINT "FK_6be7761fa8453f3a498aab6e72b" FOREIGN KEY ("workspaceId") REFERENCES "core"."workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "core"."featureFlag" DROP CONSTRAINT "FK_6be7761fa8453f3a498aab6e72b"`);
        await queryRunner.query(`DROP TABLE "core"."featureFlag"`);
    }
}
exports.AddFeatureFlags1701194529853 = AddFeatureFlags1701194529853;
//# sourceMappingURL=1701194529853-addFeatureFlags.js.map