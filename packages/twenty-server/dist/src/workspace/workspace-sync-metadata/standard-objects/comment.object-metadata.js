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
exports.CommentObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const activity_object_metadata_1 = require("./activity.object-metadata");
const base_object_metadata_1 = require("./base.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
let CommentObjectMetadata = class CommentObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.CommentObjectMetadata = CommentObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Body',
        description: 'Comment body',
        icon: 'IconLink',
        defaultValue: { value: '' },
    }),
    __metadata("design:type", String)
], CommentObjectMetadata.prototype, "body", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Author',
        description: 'Comment author',
        icon: 'IconCircleUser',
        joinColumn: 'authorId',
    }),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], CommentObjectMetadata.prototype, "author", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Activity',
        description: 'Comment activity',
        icon: 'IconNotes',
        joinColumn: 'activityId',
    }),
    __metadata("design:type", activity_object_metadata_1.ActivityObjectMetadata)
], CommentObjectMetadata.prototype, "activity", void 0);
exports.CommentObjectMetadata = CommentObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'comments',
        labelSingular: 'Comment',
        labelPlural: 'Comments',
        description: 'A comment',
        icon: 'IconMessageCircle',
    }),
    (0, is_system_decorator_1.IsSystem)()
], CommentObjectMetadata);
//# sourceMappingURL=comment.object-metadata.js.map