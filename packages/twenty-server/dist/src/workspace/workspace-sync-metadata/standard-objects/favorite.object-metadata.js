"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const company_object_metadata_1 = require("./company.object-metadata");
const opportunity_object_metadata_1 = require("./opportunity.object-metadata");
const person_object_metadata_1 = require("./person.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
let FavoriteObjectMetadata = class FavoriteObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.FavoriteObjectMetadata = FavoriteObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.NUMBER,
        label: 'Position',
        description: 'Favorite position',
        icon: 'IconList',
        defaultValue: { value: 0 },
    }),
    __metadata("design:type", Number)
], FavoriteObjectMetadata.prototype, "position", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Workspace Member',
        description: 'Favorite workspace member',
        icon: 'IconCircleUser',
        joinColumn: 'workspaceMemberId',
    }),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], FavoriteObjectMetadata.prototype, "workspaceMember", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Person',
        description: 'Favorite person',
        icon: 'IconUser',
        joinColumn: 'personId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", person_object_metadata_1.PersonObjectMetadata)
], FavoriteObjectMetadata.prototype, "person", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Company',
        description: 'Favorite company',
        icon: 'IconBuildingSkyscraper',
        joinColumn: 'companyId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", company_object_metadata_1.CompanyObjectMetadata)
], FavoriteObjectMetadata.prototype, "company", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Opportunity',
        description: 'Favorite opportunity',
        icon: 'IconTargetArrow',
        joinColumn: 'opportunityId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", opportunity_object_metadata_1.OpportunityObjectMetadata)
], FavoriteObjectMetadata.prototype, "opportunity", void 0);
exports.FavoriteObjectMetadata = FavoriteObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'favorites',
        labelSingular: 'Favorite',
        labelPlural: 'Favorites',
        description: 'A favorite',
        icon: 'IconHeart',
    }),
    (0, is_system_decorator_1.IsSystem)()
], FavoriteObjectMetadata);
//# sourceMappingURL=favorite.object-metadata.js.map