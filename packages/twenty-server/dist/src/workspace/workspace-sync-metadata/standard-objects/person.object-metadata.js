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
exports.PersonObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const gate_decorator_1 = require("../decorators/gate.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const company_object_metadata_1 = require("./company.object-metadata");
let PersonObjectMetadata = class PersonObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.PersonObjectMetadata = PersonObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.FULL_NAME,
        label: 'Name',
        description: 'Contact’s name',
        icon: 'IconUser',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Object)
], PersonObjectMetadata.prototype, "name", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.EMAIL,
        label: 'Email',
        description: 'Contact’s Email',
        icon: 'IconMail',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], PersonObjectMetadata.prototype, "email", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.LINK,
        label: 'Linkedin',
        description: 'Contact’s Linkedin account',
        icon: 'IconBrandLinkedin',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Object)
], PersonObjectMetadata.prototype, "linkedinLink", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.LINK,
        label: 'X',
        description: 'Contact’s X/Twitter account',
        icon: 'IconBrandX',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Object)
], PersonObjectMetadata.prototype, "xLink", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Job Title',
        description: 'Contact’s job title',
        icon: 'IconBriefcase',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], PersonObjectMetadata.prototype, "jobTitle", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Phone',
        description: 'Contact’s phone number',
        icon: 'IconPhone',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], PersonObjectMetadata.prototype, "phone", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'City',
        description: 'Contact’s city',
        icon: 'IconMap',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], PersonObjectMetadata.prototype, "city", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Avatar',
        description: 'Contact’s avatar',
        icon: 'IconFileUpload',
    }),
    (0, is_system_decorator_1.IsSystem)(),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], PersonObjectMetadata.prototype, "avatarUrl", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Company',
        description: 'Contact’s company',
        icon: 'IconBuildingSkyscraper',
        joinColumn: 'companyId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", company_object_metadata_1.CompanyObjectMetadata)
], PersonObjectMetadata.prototype, "company", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'POC for Opportunities',
        description: 'Point of Contact for Opportunities',
        icon: 'IconTargetArrow',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'opportunity',
        inverseSideFieldName: 'pointOfContact',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], PersonObjectMetadata.prototype, "pointOfContactForOpportunities", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Activities',
        description: 'Activities tied to the contact',
        icon: 'IconCheckbox',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'activityTarget',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], PersonObjectMetadata.prototype, "activityTargets", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Favorites',
        description: 'Favorites linked to the contact',
        icon: 'IconHeart',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'favorite',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], PersonObjectMetadata.prototype, "favorites", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Attachments',
        description: 'Attachments linked to the contact.',
        icon: 'IconFileImport',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'attachment',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], PersonObjectMetadata.prototype, "attachments", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Message Participants',
        description: 'Message Participants',
        icon: 'IconUserCircle',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'messageParticipant',
        inverseSideFieldName: 'person',
    }),
    (0, gate_decorator_1.Gate)({
        featureFlag: 'IS_MESSAGING_ENABLED',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], PersonObjectMetadata.prototype, "messageParticipants", void 0);
exports.PersonObjectMetadata = PersonObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'people',
        labelSingular: 'Person',
        labelPlural: 'People',
        description: 'A person',
        icon: 'IconUser',
    })
], PersonObjectMetadata);
//# sourceMappingURL=person.object-metadata.js.map