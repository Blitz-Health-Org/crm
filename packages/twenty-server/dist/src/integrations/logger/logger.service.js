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
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const logger_constants_1 = require("./logger.constants");
let LoggerService = class LoggerService {
    constructor(driver) {
        this.driver = driver;
    }
    log(message, category, ...optionalParams) {
        this.driver.log.apply(this.driver, [message, category, ...optionalParams]);
    }
    error(message, category, ...optionalParams) {
        this.driver.error.apply(this.driver, [
            message,
            category,
            ...optionalParams,
        ]);
    }
    warn(message, category, ...optionalParams) {
        this.driver.warn.apply(this.driver, [message, category, ...optionalParams]);
    }
    debug(message, category, ...optionalParams) {
        var _a;
        (_a = this.driver.debug) === null || _a === void 0 ? void 0 : _a.apply(this.driver, [
            message,
            category,
            ...optionalParams,
        ]);
    }
    verbose(message, category, ...optionalParams) {
        var _a;
        (_a = this.driver.verbose) === null || _a === void 0 ? void 0 : _a.apply(this.driver, [
            message,
            category,
            ...optionalParams,
        ]);
    }
    setLogLevels(levels) {
        var _a;
        (_a = this.driver.setLogLevels) === null || _a === void 0 ? void 0 : _a.apply(this.driver, [levels]);
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logger_constants_1.LOGGER_DRIVER)),
    __metadata("design:paramtypes", [Object])
], LoggerService);
//# sourceMappingURL=logger.service.js.map