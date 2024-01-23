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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandlerService = void 0;
const common_1 = require("@nestjs/common");
const exception_handler_constants_1 = require("./exception-handler.constants");
let ExceptionHandlerService = class ExceptionHandlerService {
    constructor(driver) {
        this.driver = driver;
    }
    captureException(exception) {
        this.driver.captureException(exception);
    }
};
exports.ExceptionHandlerService = ExceptionHandlerService;
exports.ExceptionHandlerService = ExceptionHandlerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(exception_handler_constants_1.EXCEPTION_HANDLER_DRIVER)),
    __metadata("design:paramtypes", [Object])
], ExceptionHandlerService);
//# sourceMappingURL=exception-handler.service.js.map