export declare const PASSWORD_REGEX: RegExp;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const compareHash: (password: string, passwordHash: string) => Promise<boolean>;
