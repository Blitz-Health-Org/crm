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
exports.Paginated = exports.ConnectionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const page_info_1 = require("./page-info");
let ConnectionArgs = class ConnectionArgs {
};
exports.ConnectionArgs = ConnectionArgs;
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Paginate before opaque cursor' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConnectionArgs.prototype, "before", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Paginate after opaque cursor' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConnectionArgs.prototype, "after", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Paginate first' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ConnectionArgs.prototype, "first", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Paginate last' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ConnectionArgs.prototype, "last", void 0);
exports.ConnectionArgs = ConnectionArgs = __decorate([
    (0, graphql_1.ArgsType)()
], ConnectionArgs);
function Paginated(classRef) {
    let Edge = class Edge {
        constructor() {
            this.name = `${classRef.name}Edge`;
        }
    };
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        __metadata("design:type", String)
    ], Edge.prototype, "cursor", void 0);
    __decorate([
        (0, graphql_1.Field)(() => classRef, { nullable: true }),
        __metadata("design:type", Object)
    ], Edge.prototype, "node", void 0);
    Edge = __decorate([
        (0, graphql_1.ObjectType)(`${classRef.name}Edge`, { isAbstract: true })
    ], Edge);
    let Connection = class Connection {
        constructor() {
            this.name = `${classRef.name}Connection`;
        }
    };
    __decorate([
        (0, graphql_1.Field)(() => [Edge], { nullable: true }),
        __metadata("design:type", Array)
    ], Connection.prototype, "edges", void 0);
    __decorate([
        (0, graphql_1.Field)(() => page_info_1.PageInfo, { nullable: true }),
        __metadata("design:type", Object)
    ], Connection.prototype, "pageInfo", void 0);
    __decorate([
        (0, graphql_1.Field)(),
        __metadata("design:type", Number)
    ], Connection.prototype, "totalCount", void 0);
    Connection = __decorate([
        (0, graphql_1.ObjectType)(`${classRef.name}Connection`, { isAbstract: true })
    ], Connection);
    return Connection;
}
exports.Paginated = Paginated;
//# sourceMappingURL=paginated.js.map