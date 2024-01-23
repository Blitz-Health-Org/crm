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
exports.ConfirmationQuestion = void 0;
const nest_commander_1 = require("nest-commander");
let ConfirmationQuestion = class ConfirmationQuestion {
    parseConfirm(val) {
        return Boolean(val);
    }
};
exports.ConfirmationQuestion = ConfirmationQuestion;
__decorate([
    (0, nest_commander_1.Question)({
        type: 'confirm',
        name: 'confirmation',
        message: "You are about to delete data from database. Are you sure to continue? Consider the '--dry-run' option first",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], ConfirmationQuestion.prototype, "parseConfirm", null);
exports.ConfirmationQuestion = ConfirmationQuestion = __decorate([
    (0, nest_commander_1.QuestionSet)({
        name: 'confirm',
    })
], ConfirmationQuestion);
//# sourceMappingURL=confirmation.question.js.map