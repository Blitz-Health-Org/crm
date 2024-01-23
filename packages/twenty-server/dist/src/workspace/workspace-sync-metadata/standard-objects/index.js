"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardObjectMetadata = void 0;
const activity_target_object_metadata_1 = require("./activity-target.object-metadata");
const activity_object_metadata_1 = require("./activity.object-metadata");
const api_key_object_metadata_1 = require("./api-key.object-metadata");
const attachment_object_metadata_1 = require("./attachment.object-metadata");
const comment_object_metadata_1 = require("./comment.object-metadata");
const company_object_metadata_1 = require("./company.object-metadata");
const connected_account_object_metadata_1 = require("./connected-account.object-metadata");
const favorite_object_metadata_1 = require("./favorite.object-metadata");
const message_channel_object_metadata_1 = require("./message-channel.object-metadata");
const message_participant_object_metadata_1 = require("./message-participant.object-metadata");
const message_thread_object_metadata_1 = require("./message-thread.object-metadata");
const message_object_metadata_1 = require("./message.object-metadata");
const opportunity_object_metadata_1 = require("./opportunity.object-metadata");
const person_object_metadata_1 = require("./person.object-metadata");
const pipeline_step_object_metadata_1 = require("./pipeline-step.object-metadata");
const view_field_object_metadata_1 = require("./view-field.object-metadata");
const view_filter_object_metadata_1 = require("./view-filter.object-metadata");
const view_sort_object_metadata_1 = require("./view-sort.object-metadata");
const view_object_metadata_1 = require("./view.object-metadata");
const webhook_object_metadata_1 = require("./webhook.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
exports.standardObjectMetadata = [
    activity_target_object_metadata_1.ActivityTargetObjectMetadata,
    activity_object_metadata_1.ActivityObjectMetadata,
    api_key_object_metadata_1.ApiKeyObjectMetadata,
    attachment_object_metadata_1.AttachmentObjectMetadata,
    comment_object_metadata_1.CommentObjectMetadata,
    company_object_metadata_1.CompanyObjectMetadata,
    connected_account_object_metadata_1.ConnectedAccountObjectMetadata,
    favorite_object_metadata_1.FavoriteObjectMetadata,
    opportunity_object_metadata_1.OpportunityObjectMetadata,
    person_object_metadata_1.PersonObjectMetadata,
    pipeline_step_object_metadata_1.PipelineStepObjectMetadata,
    view_field_object_metadata_1.ViewFieldObjectMetadata,
    view_filter_object_metadata_1.ViewFilterObjectMetadata,
    view_sort_object_metadata_1.ViewSortObjectMetadata,
    view_object_metadata_1.ViewObjectMetadata,
    webhook_object_metadata_1.WebhookObjectMetadata,
    workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata,
    message_thread_object_metadata_1.MessageThreadObjectMetadata,
    message_object_metadata_1.MessageObjectMetadata,
    message_channel_object_metadata_1.MessageChannelObjectMetadata,
    message_participant_object_metadata_1.MessageParticipantObjectMetadata,
];
//# sourceMappingURL=index.js.map