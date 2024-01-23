"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDefinitionsStorage = void 0;
const common_1 = require("@nestjs/common");
let TypeDefinitionsStorage = class TypeDefinitionsStorage {
    constructor() {
        this.enumTypeDefinitions = new Map();
        this.objectTypeDefinitions = new Map();
        this.inputTypeDefinitions = new Map();
    }
    addEnumTypes(enumDefs) {
        enumDefs.forEach((item) => this.enumTypeDefinitions.set(item.target, item));
    }
    addObjectTypes(objectDefs) {
        objectDefs.forEach((item) => this.objectTypeDefinitions.set(this.generateCompositeKey(item.target, item.kind), item));
    }
    getObjectTypeByKey(target, kind) {
        var _a;
        return (_a = this.objectTypeDefinitions.get(this.generateCompositeKey(target, kind))) === null || _a === void 0 ? void 0 : _a.type;
    }
    getAllObjectTypeDefinitions() {
        return Array.from(this.objectTypeDefinitions.values());
    }
    addInputTypes(inputDefs) {
        inputDefs.forEach((item) => this.inputTypeDefinitions.set(this.generateCompositeKey(item.target, item.kind), item));
    }
    getInputTypeByKey(target, kind) {
        var _a;
        return (_a = this.inputTypeDefinitions.get(this.generateCompositeKey(target, kind))) === null || _a === void 0 ? void 0 : _a.type;
    }
    getEnumTypeByKey(target) {
        var _a;
        return (_a = this.enumTypeDefinitions.get(target)) === null || _a === void 0 ? void 0 : _a.type;
    }
    getAllInputTypeDefinitions() {
        return Array.from(this.inputTypeDefinitions.values());
    }
    generateCompositeKey(target, kind) {
        return `${target.toString()}_${kind.toString()}`;
    }
};
exports.TypeDefinitionsStorage = TypeDefinitionsStorage;
exports.TypeDefinitionsStorage = TypeDefinitionsStorage = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST })
], TypeDefinitionsStorage);
//# sourceMappingURL=type-definitions.storage.js.map