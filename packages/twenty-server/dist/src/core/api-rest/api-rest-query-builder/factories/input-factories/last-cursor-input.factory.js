"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastCursorInputFactory = void 0;
const common_1 = require("@nestjs/common");
let LastCursorInputFactory = class LastCursorInputFactory {
    create(request) {
        const cursorQuery = request.query.last_cursor;
        if (typeof cursorQuery !== 'string') {
            return undefined;
        }
        return cursorQuery;
    }
};
exports.LastCursorInputFactory = LastCursorInputFactory;
exports.LastCursorInputFactory = LastCursorInputFactory = __decorate([
    (0, common_1.Injectable)()
], LastCursorInputFactory);
//# sourceMappingURL=last-cursor-input.factory.js.map