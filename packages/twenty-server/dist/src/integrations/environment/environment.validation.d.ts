import { LogLevel } from '@nestjs/common';
import { ExceptionHandlerDriver } from 'src/integrations/exception-handler/interfaces';
import { StorageDriverType } from 'src/integrations/file-storage/interfaces';
import { LoggerDriverType } from 'src/integrations/logger/interfaces';
import { AwsRegion } from './interfaces/aws-region.interface';
import { SupportDriver } from './interfaces/support.interface';
export declare class EnvironmentVariables {
    DEBUG_MODE?: boolean;
    SIGN_IN_PREFILLED?: boolean;
    IS_BILLING_ENABLED?: boolean;
    BILLING_URL?: string;
    TELEMETRY_ENABLED?: boolean;
    TELEMETRY_ANONYMIZATION_ENABLED?: boolean;
    PORT: number;
    PG_DATABASE_URL: string;
    FRONT_BASE_URL: string;
    SERVER_URL: string;
    ACCESS_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_SECRET: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_COOL_DOWN: string;
    LOGIN_TOKEN_SECRET: string;
    LOGIN_TOKEN_EXPIRES_IN: string;
    FRONT_AUTH_CALLBACK_URL: string;
    AUTH_GOOGLE_ENABLED?: boolean;
    AUTH_GOOGLE_CLIENT_ID?: string;
    AUTH_GOOGLE_CLIENT_SECRET?: string;
    AUTH_GOOGLE_CALLBACK_URL?: string;
    STORAGE_TYPE?: StorageDriverType;
    STORAGE_S3_REGION?: AwsRegion;
    STORAGE_S3_NAME?: string;
    STORAGE_LOCAL_PATH?: string;
    SUPPORT_DRIVER?: SupportDriver;
    SUPPORT_FRONT_CHAT_ID?: string;
    SUPPORT_FRONT_HMAC_KEY?: string;
    LOGGER_DRIVER?: LoggerDriverType;
    EXCEPTION_HANDLER_DRIVER?: ExceptionHandlerDriver;
    LOG_LEVELS?: LogLevel[];
    DEMO_WORKSPACE_IDS?: string[];
    SENTRY_DSN?: string;
    WORKSPACE_INACTIVE_DAYS_BEFORE_NOTIFICATION: number;
    WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION: number;
    IS_SIGN_UP_DISABLED?: boolean;
}
export declare const validate: (config: Record<string, unknown>) => EnvironmentVariables;
