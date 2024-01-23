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
exports.WorkspaceMember = exports.FullName = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
let FullName = class FullName {
};
exports.FullName = FullName;
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], FullName.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], FullName.prototype, "lastName", void 0);
exports.FullName = FullName = __decorate([
    (0, graphql_1.ObjectType)('FullName')
], FullName);
let WorkspaceMember = class WorkspaceMember {
};
exports.WorkspaceMember = WorkspaceMember;
__decorate([
    (0, nestjs_query_graphql_1.IDField)(() => graphql_1.ID),
    __metadata("design:type", String)
], WorkspaceMember.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => FullName),
    __metadata("design:type", FullName)
], WorkspaceMember.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], WorkspaceMember.prototype, "colorScheme", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], WorkspaceMember.prototype, "avatarUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], WorkspaceMember.prototype, "locale", void 0);
exports.WorkspaceMember = WorkspaceMember = __decorate([
    (0, graphql_1.ObjectType)('WorkspaceMember')
], WorkspaceMember);
//# sourceMappingURL=workspace-member.dto.js.map