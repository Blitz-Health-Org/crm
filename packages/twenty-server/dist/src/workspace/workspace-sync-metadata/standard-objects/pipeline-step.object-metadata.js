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
exports.PipelineStepObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
let PipelineStepObjectMetadata = class PipelineStepObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.PipelineStepObjectMetadata = PipelineStepObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Name',
        description: 'Pipeline Step name',
        icon: 'IconCurrencyDollar',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], PipelineStepObjectMetadata.prototype, "name", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Color',
        description: 'Pipeline Step color',
        icon: 'IconColorSwatch',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], PipelineStepObjectMetadata.prototype, "color", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.NUMBER,
        label: 'Position',
        description: 'Pipeline Step position',
        icon: 'IconHierarchy2',
        defaultValue: { value: 0 },
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Number)
], PipelineStepObjectMetadata.prototype, "position", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Opportunities',
        description: 'Opportunities linked to the step.',
        icon: 'IconTargetArrow',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'opportunity',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], PipelineStepObjectMetadata.prototype, "opportunities", void 0);
exports.PipelineStepObjectMetadata = PipelineStepObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'pipelineSteps',
        labelSingular: 'Pipeline Step',
        labelPlural: 'Pipeline Steps',
        description: 'A pipeline step',
        icon: 'IconLayoutKanban',
    }),
    (0, is_system_decorator_1.IsSystem)()
], PipelineStepObjectMetadata);
//# sourceMappingURL=pipeline-step.object-metadata.js.map