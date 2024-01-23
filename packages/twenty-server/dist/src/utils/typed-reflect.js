"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedReflect = void 0;
require("reflect-metadata");
class TypedReflect {
    static defineMetadata(metadataKey, metadataValue, target, propertyKeyOrUndefined) {
        if (propertyKeyOrUndefined === undefined) {
            Reflect.defineMetadata(metadataKey, metadataValue, target);
        }
        else {
            Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKeyOrUndefined);
        }
    }
    static getMetadata(metadataKey, target, propertyKeyOrUndefined) {
        if (propertyKeyOrUndefined === undefined) {
            return Reflect.getMetadata(metadataKey, target);
        }
        else {
            return Reflect.getMetadata(metadataKey, target, propertyKeyOrUndefined);
        }
    }
}
exports.TypedReflect = TypedReflect;
//# sourceMappingURL=typed-reflect.js.map