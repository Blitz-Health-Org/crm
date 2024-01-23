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
exports.ArgsStringFactory = void 0;
const common_1 = require("@nestjs/common");
const stringify_without_key_quote_util_1 = require("../utils/stringify-without-key-quote.util");
const args_alias_factory_1 = require("./args-alias.factory");
let ArgsStringFactory = class ArgsStringFactory {
    constructor(argsAliasFactory) {
        this.argsAliasFactory = argsAliasFactory;
    }
    create(initialArgs, fieldMetadataCollection) {
        if (!initialArgs) {
            return null;
        }
        let argsString = '';
        const computedArgs = this.argsAliasFactory.create(initialArgs, fieldMetadataCollection);
        for (const key in computedArgs) {
            if (computedArgs[key] === undefined) {
                continue;
            }
            if (typeof computedArgs[key] === 'string') {
                argsString += `${key}: "${computedArgs[key]}", `;
            }
            else if (typeof computedArgs[key] === 'object' &&
                computedArgs[key] !== null) {
                argsString += `${key}: ${(0, stringify_without_key_quote_util_1.stringifyWithoutKeyQuote)(computedArgs[key])}, `;
            }
            else {
                argsString += `${key}: ${computedArgs[key]}, `;
            }
        }
        if (argsString.endsWith(', ')) {
            argsString = argsString.slice(0, -2);
        }
        return argsString;
    }
};
exports.ArgsStringFactory = ArgsStringFactory;
exports.ArgsStringFactory = ArgsStringFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [args_alias_factory_1.ArgsAliasFactory])
], ArgsStringFactory);
//# sourceMappingURL=args-string.factory.js.map