import { User } from 'src/core/user/user.entity';
import { AuthTokens } from './token.entity';
export declare class Verify extends AuthTokens {
    user: DeepPartial<User>;
}
