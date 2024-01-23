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
exports.CompanyObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
let CompanyObjectMetadata = class CompanyObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.CompanyObjectMetadata = CompanyObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Name',
        description: 'The company name',
        icon: 'IconBuildingSkyscraper',
    }),
    __metadata("design:type", String)
], CompanyObjectMetadata.prototype, "name", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Domain Name',
        description: 'The company website URL. We use this url to fetch the company icon',
        icon: 'IconLink',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], CompanyObjectMetadata.prototype, "domainName", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Address',
        description: 'The company address',
        icon: 'IconMap',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], CompanyObjectMetadata.prototype, "address", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.NUMBER,
        label: 'Employees',
        description: 'Number of employees in the company',
        icon: 'IconUsers',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Number)
], CompanyObjectMetadata.prototype, "employees", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.LINK,
        label: 'Linkedin',
        description: 'The company Linkedin account',
        icon: 'IconBrandLinkedin',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Object)
], CompanyObjectMetadata.prototype, "linkedinLink", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.LINK,
        label: 'X',
        description: 'The company Twitter/X account',
        icon: 'IconBrandX',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Object)
], CompanyObjectMetadata.prototype, "xLink", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.CURRENCY,
        label: 'ARR',
        description: 'Annual Recurring Revenue: The actual or estimated annual revenue of the company',
        icon: 'IconMoneybag',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Object)
], CompanyObjectMetadata.prototype, "annualRecurringRevenue", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.BOOLEAN,
        label: 'ICP',
        description: 'Ideal Customer Profile:  Indicates whether the company is the most suitable and valuable customer for you',
        icon: 'IconTarget',
        defaultValue: { value: false },
    }),
    __metadata("design:type", Boolean)
], CompanyObjectMetadata.prototype, "idealCustomerProfile", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'People',
        description: 'People linked to the company.',
        icon: 'IconUsers',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'person',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], CompanyObjectMetadata.prototype, "people", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Account Owner',
        description: 'Your team member responsible for managing the company account',
        icon: 'IconUserCircle',
        joinColumn: 'accountOwnerId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], CompanyObjectMetadata.prototype, "accountOwner", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Activities',
        description: 'Activities tied to the company',
        icon: 'IconCheckbox',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'activityTarget',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], CompanyObjectMetadata.prototype, "activityTargets", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Opportunities',
        description: 'Opportunities linked to the company.',
        icon: 'IconTargetArrow',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'opportunity',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], CompanyObjectMetadata.prototype, "opportunities", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Favorites',
        description: 'Favorites linked to the company',
        icon: 'IconHeart',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'favorite',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], CompanyObjectMetadata.prototype, "favorites", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Attachments',
        description: 'Attachments linked to the company.',
        icon: 'IconFileImport',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'attachment',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], CompanyObjectMetadata.prototype, "attachments", void 0);
exports.CompanyObjectMetadata = CompanyObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'companies',
        labelSingular: 'Company',
        labelPlural: 'Companies',
        description: 'A company',
        icon: 'IconBuildingSkyscraper',
    })
], CompanyObjectMetadata);
//# sourceMappingURL=company.object-metadata.js.map