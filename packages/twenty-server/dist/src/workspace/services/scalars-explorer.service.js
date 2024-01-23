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
exports.ScalarsExplorerService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const scalars_1 = require("../workspace-schema-builder/graphql-types/scalars");
let ScalarsExplorerService = class ScalarsExplorerService {
    constructor() {
        this.scalarImplementations = scalars_1.scalars.reduce((acc, scalar) => {
            acc[scalar.name] = scalar;
            return acc;
        }, {});
    }
    getScalarImplementation(scalarName) {
        return this.scalarImplementations[scalarName];
    }
    getUsedScalarNames(schema) {
        const typeMap = schema.getTypeMap();
        const usedScalarNames = [];
        for (const typeName in typeMap) {
            const type = typeMap[typeName];
            if ((0, graphql_1.isScalarType)(type) && !typeName.startsWith('__')) {
                usedScalarNames.push(type.name);
            }
        }
        return usedScalarNames;
    }
    getScalarResolvers(usedScalarNames) {
        const scalarResolvers = {};
        for (const scalarName of usedScalarNames) {
            const scalarImplementation = this.getScalarImplementation(scalarName);
            if (scalarImplementation) {
                scalarResolvers[scalarName] = scalarImplementation;
            }
        }
        return scalarResolvers;
    }
};
exports.ScalarsExplorerService = ScalarsExplorerService;
exports.ScalarsExplorerService = ScalarsExplorerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ScalarsExplorerService);
//# sourceMappingURL=scalars-explorer.service.js.map