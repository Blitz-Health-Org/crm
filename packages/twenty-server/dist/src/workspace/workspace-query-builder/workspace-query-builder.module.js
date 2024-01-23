"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceQueryBuilderModule = void 0;
const common_1 = require("@nestjs/common");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
const fields_string_factory_1 = require("./factories/fields-string.factory");
const workspace_query_builder_factory_1 = require("./workspace-query-builder.factory");
const factories_1 = require("./factories/factories");
let WorkspaceQueryBuilderModule = class WorkspaceQueryBuilderModule {
};
exports.WorkspaceQueryBuilderModule = WorkspaceQueryBuilderModule;
exports.WorkspaceQueryBuilderModule = WorkspaceQueryBuilderModule = __decorate([
    (0, common_1.Module)({
        imports: [object_metadata_module_1.ObjectMetadataModule],
        providers: [...factories_1.workspaceQueryBuilderFactories, workspace_query_builder_factory_1.WorkspaceQueryBuilderFactory],
        exports: [workspace_query_builder_factory_1.WorkspaceQueryBuilderFactory, fields_string_factory_1.FieldsStringFactory],
    })
], WorkspaceQueryBuilderModule);
//# sourceMappingURL=workspace-query-builder.module.js.map