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
exports.OpportunityObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const company_object_metadata_1 = require("./company.object-metadata");
const person_object_metadata_1 = require("./person.object-metadata");
const pipeline_step_object_metadata_1 = require("./pipeline-step.object-metadata");
let OpportunityObjectMetadata = class OpportunityObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.OpportunityObjectMetadata = OpportunityObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Name',
        description: 'The opportunity name',
        icon: 'IconTargetArrow',
    }),
    __metadata("design:type", String)
], OpportunityObjectMetadata.prototype, "name", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.CURRENCY,
        label: 'Amount',
        description: 'Opportunity amount',
        icon: 'IconCurrencyDollar',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Object)
], OpportunityObjectMetadata.prototype, "amount", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Close date',
        description: 'Opportunity close date',
        icon: 'IconCalendarEvent',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Date)
], OpportunityObjectMetadata.prototype, "closeDate", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Probability',
        description: 'Opportunity probability',
        icon: 'IconProgressCheck',
        defaultValue: { value: '0' },
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], OpportunityObjectMetadata.prototype, "probability", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Pipeline Step',
        description: 'Opportunity pipeline step',
        icon: 'IconKanban',
        joinColumn: 'pipelineStepId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", pipeline_step_object_metadata_1.PipelineStepObjectMetadata)
], OpportunityObjectMetadata.prototype, "pipelineStep", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Point of Contact',
        description: 'Opportunity point of contact',
        icon: 'IconUser',
        joinColumn: 'pointOfContactId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", person_object_metadata_1.PersonObjectMetadata)
], OpportunityObjectMetadata.prototype, "pointOfContact", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Company',
        description: 'Opportunity company',
        icon: 'IconBuildingSkyscraper',
        joinColumn: 'companyId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", company_object_metadata_1.CompanyObjectMetadata)
], OpportunityObjectMetadata.prototype, "company", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Favorites',
        description: 'Favorites linked to the opportunity',
        icon: 'IconHeart',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'favorite',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], OpportunityObjectMetadata.prototype, "favorites", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Activities',
        description: 'Activities tied to the opportunity',
        icon: 'IconCheckbox',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'activityTarget',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], OpportunityObjectMetadata.prototype, "activityTargets", void 0);
exports.OpportunityObjectMetadata = OpportunityObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'opportunities',
        labelSingular: 'Opportunity',
        labelPlural: 'Opportunities',
        description: 'An opportunity',
        icon: 'IconTargetArrow',
    })
], OpportunityObjectMetadata);
//# sourceMappingURL=opportunity.object-metadata.js.map