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
exports.ActivityObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
let ActivityObjectMetadata = class ActivityObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.ActivityObjectMetadata = ActivityObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Title',
        description: 'Activity title',
        icon: 'IconNotes',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], ActivityObjectMetadata.prototype, "title", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Body',
        description: 'Activity body',
        icon: 'IconList',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], ActivityObjectMetadata.prototype, "body", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Type',
        description: 'Activity type',
        icon: 'IconCheckbox',
        defaultValue: { value: 'Note' },
    }),
    __metadata("design:type", String)
], ActivityObjectMetadata.prototype, "type", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Reminder Date',
        description: 'Activity reminder date',
        icon: 'IconCalendarEvent',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Date)
], ActivityObjectMetadata.prototype, "reminderAt", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Due Date',
        description: 'Activity due date',
        icon: 'IconCalendarEvent',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Date)
], ActivityObjectMetadata.prototype, "dueAt", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Completion Date',
        description: 'Activity completion date',
        icon: 'IconCheck',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Date)
], ActivityObjectMetadata.prototype, "completedAt", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Targets',
        description: 'Activity targets',
        icon: 'IconCheckbox',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'activityTarget',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], ActivityObjectMetadata.prototype, "activityTargets", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Attachments',
        description: 'Activity attachments',
        icon: 'IconFileImport',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'attachment',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], ActivityObjectMetadata.prototype, "attachments", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Comments',
        description: 'Activity comments',
        icon: 'IconComment',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'comment',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], ActivityObjectMetadata.prototype, "comments", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Author',
        description: 'Activity author',
        icon: 'IconUserCircle',
        joinColumn: 'authorId',
    }),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], ActivityObjectMetadata.prototype, "author", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Assignee',
        description: 'Acitivity assignee',
        icon: 'IconUserCircle',
        joinColumn: 'assigneeId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], ActivityObjectMetadata.prototype, "assignee", void 0);
exports.ActivityObjectMetadata = ActivityObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'activities',
        labelSingular: 'Activity',
        labelPlural: 'Activities',
        description: 'An activity',
        icon: 'IconCheckbox',
    }),
    (0, is_system_decorator_1.IsSystem)()
], ActivityObjectMetadata);
//# sourceMappingURL=activity.object-metadata.js.map