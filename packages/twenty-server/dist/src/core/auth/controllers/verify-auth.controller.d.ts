import { AuthService } from 'src/core/auth/services/auth.service';
import { VerifyInput } from 'src/core/auth/dto/verify.input';
import { Verify } from 'src/core/auth/dto/verify.entity';
import { TokenService } from 'src/core/auth/services/token.service';
export declare class VerifyAuthController {
    private readonly authService;
    private readonly tokenService;
    constructor(authService: AuthService, tokenService: TokenService);
    verify(verifyInput: VerifyInput): Promise<Verify>;
}
