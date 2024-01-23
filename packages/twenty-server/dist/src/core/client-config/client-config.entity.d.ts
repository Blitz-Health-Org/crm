declare class AuthProviders {
    google: boolean;
    magicLink: boolean;
    password: boolean;
}
declare class Telemetry {
    enabled: boolean;
    anonymizationEnabled: boolean;
}
declare class Billing {
    isBillingEnabled: boolean;
    billingUrl: string;
}
declare class Support {
    supportDriver: string;
    supportFrontChatId: string | undefined;
}
declare class Sentry {
    dsn: string | undefined;
}
export declare class ClientConfig {
    authProviders: AuthProviders;
    telemetry: Telemetry;
    billing: Billing;
    signInPrefilled: boolean;
    signUpDisabled: boolean;
    debugMode: boolean;
    support: Support;
    sentry: Sentry;
}
export {};
