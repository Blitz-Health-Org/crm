"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgsAliasFactory = void 0;
const common_1 = require("@nestjs/common");
let ArgsAliasFactory = class ArgsAliasFactory {
    create(args, fieldMetadataCollection) {
        const fieldMetadataMap = new Map(fieldMetadataCollection.map((fieldMetadata) => [
            fieldMetadata.name,
            fieldMetadata,
        ]));
        return this.createArgsObjectRecursive(args, fieldMetadataMap);
    }
    createArgsObjectRecursive(args, fieldMetadataMap) {
        if (typeof args !== 'object' || args === null) {
            return args;
        }
        if (Array.isArray(args)) {
            return args.map((arg) => this.createArgsObjectRecursive(arg, fieldMetadataMap));
        }
        const newArgs = {};
        for (const [key, value] of Object.entries(args)) {
            const fieldMetadata = fieldMetadataMap.get(key);
            if (fieldMetadata &&
                typeof value === 'object' &&
                value !== null &&
                Object.values(fieldMetadata.targetColumnMap).length > 1) {
                for (const [subKey, subValue] of Object.entries(value)) {
                    const mappedKey = fieldMetadata.targetColumnMap[subKey];
                    if (mappedKey) {
                        newArgs[mappedKey] = subValue;
                    }
                }
            }
            else if (fieldMetadata) {
                const mappedKey = fieldMetadata.targetColumnMap.value;
                newArgs[mappedKey !== null && mappedKey !== void 0 ? mappedKey : key] = value;
            }
            else {
                newArgs[key] = this.createArgsObjectRecursive(value, fieldMetadataMap);
            }
        }
        return newArgs;
    }
};
exports.ArgsAliasFactory = ArgsAliasFactory;
exports.ArgsAliasFactory = ArgsAliasFactory = __decorate([
    (0, common_1.Injectable)()
], ArgsAliasFactory);
//# sourceMappingURL=args-alias.factory.js.map