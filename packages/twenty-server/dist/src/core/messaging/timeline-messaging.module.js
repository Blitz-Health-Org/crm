"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineMessagingModule = void 0;
const common_1 = require("@nestjs/common");
const timeline_messaging_resolver_1 = require("./timeline-messaging.resolver");
const timeline_messaging_service_1 = require("./timeline-messaging.service");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const data_source_module_1 = require("../../metadata/data-source/data-source.module");
let TimelineMessagingModule = class TimelineMessagingModule {
};
exports.TimelineMessagingModule = TimelineMessagingModule;
exports.TimelineMessagingModule = TimelineMessagingModule = __decorate([
    (0, common_1.Module)({
        imports: [data_source_module_1.DataSourceModule, typeorm_module_1.TypeORMModule],
        exports: [],
        providers: [timeline_messaging_resolver_1.TimelineMessagingResolver, timeline_messaging_service_1.TimelineMessagingService],
    })
], TimelineMessagingModule);
//# sourceMappingURL=timeline-messaging.module.js.map