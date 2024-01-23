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
exports.OrphanedTypesFactory = void 0;
const common_1 = require("@nestjs/common");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
let OrphanedTypesFactory = class OrphanedTypesFactory {
    constructor(typeDefinitionsStorage) {
        this.typeDefinitionsStorage = typeDefinitionsStorage;
    }
    create() {
        const objectTypeDefs = this.typeDefinitionsStorage.getAllObjectTypeDefinitions();
        const inputTypeDefs = this.typeDefinitionsStorage.getAllInputTypeDefinitions();
        const classTypeDefs = [...objectTypeDefs, ...inputTypeDefs];
        return [...classTypeDefs.map(({ type }) => type)];
    }
};
exports.OrphanedTypesFactory = OrphanedTypesFactory;
exports.OrphanedTypesFactory = OrphanedTypesFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_definitions_storage_1.TypeDefinitionsStorage])
], OrphanedTypesFactory);
//# sourceMappingURL=orphaned-types.factory.js.map