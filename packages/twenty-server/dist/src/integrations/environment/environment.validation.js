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
exports.validate = exports.EnvironmentVariables = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const assert_1 = require("../../utils/assert");
const cast_to_string_array_decorator_1 = require("./decorators/cast-to-string-array.decorator");
const interfaces_1 = require("../exception-handler/interfaces");
const interfaces_2 = require("../file-storage/interfaces");
const interfaces_3 = require("../logger/interfaces");
const is_strictly_lower_than_decorator_1 = require("./decorators/is-strictly-lower-than.decorator");
const is_duration_decorator_1 = require("./decorators/is-duration.decorator");
const is_aws_region_decorator_1 = require("./decorators/is-aws-region.decorator");
const cast_to_boolean_decorator_1 = require("./decorators/cast-to-boolean.decorator");
const support_interface_1 = require("./interfaces/support.interface");
const cast_to_positive_number_decorator_1 = require("./decorators/cast-to-positive-number.decorator");
const cast_to_log_level_array_decorator_1 = require("./decorators/cast-to-log-level-array.decorator");
class EnvironmentVariables {
}
exports.EnvironmentVariables = EnvironmentVariables;
__decorate([
    (0, cast_to_boolean_decorator_1.CastToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnvironmentVariables.prototype, "DEBUG_MODE", void 0);
__decorate([
    (0, cast_to_boolean_decorator_1.CastToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnvironmentVariables.prototype, "SIGN_IN_PREFILLED", void 0);
__decorate([
    (0, cast_to_boolean_decorator_1.CastToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnvironmentVariables.prototype, "IS_BILLING_ENABLED", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "BILLING_URL", void 0);
__decorate([
    (0, cast_to_boolean_decorator_1.CastToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnvironmentVariables.prototype, "TELEMETRY_ENABLED", void 0);
__decorate([
    (0, cast_to_boolean_decorator_1.CastToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnvironmentVariables.prototype, "TELEMETRY_ANONYMIZATION_ENABLED", void 0);
__decorate([
    (0, cast_to_positive_number_decorator_1.CastToPositiveNumber)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EnvironmentVariables.prototype, "PORT", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ require_tld: false }),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "FRONT_BASE_URL", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ require_tld: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "SERVER_URL", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "ACCESS_TOKEN_SECRET", void 0);
__decorate([
    (0, is_duration_decorator_1.IsDuration)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "ACCESS_TOKEN_EXPIRES_IN", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "REFRESH_TOKEN_SECRET", void 0);
__decorate([
    (0, is_duration_decorator_1.IsDuration)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "REFRESH_TOKEN_EXPIRES_IN", void 0);
__decorate([
    (0, is_duration_decorator_1.IsDuration)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "REFRESH_TOKEN_COOL_DOWN", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "LOGIN_TOKEN_SECRET", void 0);
__decorate([
    (0, is_duration_decorator_1.IsDuration)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "LOGIN_TOKEN_EXPIRES_IN", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ require_tld: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "FRONT_AUTH_CALLBACK_URL", void 0);
__decorate([
    (0, cast_to_boolean_decorator_1.CastToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnvironmentVariables.prototype, "AUTH_GOOGLE_ENABLED", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((env) => env.AUTH_GOOGLE_ENABLED === true),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "AUTH_GOOGLE_CLIENT_ID", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((env) => env.AUTH_GOOGLE_ENABLED === true),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "AUTH_GOOGLE_CLIENT_SECRET", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ require_tld: false }),
    (0, class_validator_1.ValidateIf)((env) => env.AUTH_GOOGLE_ENABLED === true),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "AUTH_GOOGLE_CALLBACK_URL", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_2.StorageDriverType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "STORAGE_TYPE", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((env) => env.STORAGE_TYPE === interfaces_2.StorageDriverType.S3),
    (0, is_aws_region_decorator_1.IsAWSRegion)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "STORAGE_S3_REGION", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((env) => env.STORAGE_TYPE === interfaces_2.StorageDriverType.S3),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "STORAGE_S3_NAME", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((env) => env.STORAGE_TYPE === interfaces_2.StorageDriverType.Local),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "STORAGE_LOCAL_PATH", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(support_interface_1.SupportDriver),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "SUPPORT_DRIVER", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((env) => env.SUPPORT_DRIVER === support_interface_1.SupportDriver.Front),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "SUPPORT_FRONT_CHAT_ID", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((env) => env.SUPPORT_DRIVER === support_interface_1.SupportDriver.Front),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "SUPPORT_FRONT_HMAC_KEY", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_3.LoggerDriverType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "LOGGER_DRIVER", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.ExceptionHandlerDriver),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "EXCEPTION_HANDLER_DRIVER", void 0);
__decorate([
    (0, cast_to_log_level_array_decorator_1.CastToLogLevelArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], EnvironmentVariables.prototype, "LOG_LEVELS", void 0);
__decorate([
    (0, cast_to_string_array_decorator_1.CastToStringArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], EnvironmentVariables.prototype, "DEMO_WORKSPACE_IDS", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((env) => env.EXCEPTION_HANDLER_DRIVER === interfaces_1.ExceptionHandlerDriver.Sentry),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "SENTRY_DSN", void 0);
__decorate([
    (0, cast_to_positive_number_decorator_1.CastToPositiveNumber)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.ValidateIf)((env) => env.WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION > 0),
    (0, is_strictly_lower_than_decorator_1.IsStrictlyLowerThan)('WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION', {
        message: '"WORKSPACE_INACTIVE_DAYS_BEFORE_NOTIFICATION" should be strictly lower that "WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION"',
    }),
    (0, class_validator_1.ValidateIf)((env) => env.WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION > 0),
    __metadata("design:type", Number)
], EnvironmentVariables.prototype, "WORKSPACE_INACTIVE_DAYS_BEFORE_NOTIFICATION", void 0);
__decorate([
    (0, cast_to_positive_number_decorator_1.CastToPositiveNumber)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.ValidateIf)((env) => env.WORKSPACE_INACTIVE_DAYS_BEFORE_NOTIFICATION > 0),
    __metadata("design:type", Number)
], EnvironmentVariables.prototype, "WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION", void 0);
__decorate([
    (0, cast_to_boolean_decorator_1.CastToBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EnvironmentVariables.prototype, "IS_SIGN_UP_DISABLED", void 0);
const validate = (config) => {
    const validatedConfig = (0, class_transformer_1.plainToClass)(EnvironmentVariables, config);
    const errors = (0, class_validator_1.validateSync)(validatedConfig);
    (0, assert_1.assert)(!errors.length, errors.toString());
    return validatedConfig;
};
exports.validate = validate;
//# sourceMappingURL=environment.validation.js.map