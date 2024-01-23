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
exports.AttachmentObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const activity_object_metadata_1 = require("./activity.object-metadata");
const base_object_metadata_1 = require("./base.object-metadata");
const company_object_metadata_1 = require("./company.object-metadata");
const person_object_metadata_1 = require("./person.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
let AttachmentObjectMetadata = class AttachmentObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.AttachmentObjectMetadata = AttachmentObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Name',
        description: 'Attachment name',
        icon: 'IconFileUpload',
    }),
    __metadata("design:type", String)
], AttachmentObjectMetadata.prototype, "name", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Full path',
        description: 'Attachment full path',
        icon: 'IconLink',
    }),
    __metadata("design:type", String)
], AttachmentObjectMetadata.prototype, "fullPath", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Type',
        description: 'Attachment type',
        icon: 'IconList',
    }),
    __metadata("design:type", String)
], AttachmentObjectMetadata.prototype, "type", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Author',
        description: 'Attachment author',
        icon: 'IconCircleUser',
        joinColumn: 'authorId',
    }),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], AttachmentObjectMetadata.prototype, "author", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Activity',
        description: 'Attachment activity',
        icon: 'IconNotes',
        joinColumn: 'activityId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", activity_object_metadata_1.ActivityObjectMetadata)
], AttachmentObjectMetadata.prototype, "activity", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Person',
        description: 'Attachment person',
        icon: 'IconUser',
        joinColumn: 'personId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", person_object_metadata_1.PersonObjectMetadata)
], AttachmentObjectMetadata.prototype, "person", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Company',
        description: 'Attachment company',
        icon: 'IconBuildingSkyscraper',
        joinColumn: 'companyId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", company_object_metadata_1.CompanyObjectMetadata)
], AttachmentObjectMetadata.prototype, "company", void 0);
exports.AttachmentObjectMetadata = AttachmentObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'attachments',
        labelSingular: 'Attachment',
        labelPlural: 'Attachments',
        description: 'An attachment',
        icon: 'IconFileImport',
    }),
    (0, is_system_decorator_1.IsSystem)()
], AttachmentObjectMetadata);
//# sourceMappingURL=attachment.object-metadata.js.map