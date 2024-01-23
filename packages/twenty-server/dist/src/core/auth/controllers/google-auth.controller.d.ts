import { Response } from 'express';
import { Repository } from 'typeorm';
import { GoogleRequest } from 'src/core/auth/strategies/google.auth.strategy';
import { TokenService } from 'src/core/auth/services/token.service';
import { User } from 'src/core/user/user.entity';
import { AuthService } from 'src/core/auth/services/auth.service';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export declare class GoogleAuthController {
    private readonly tokenService;
    private readonly environmentService;
    private readonly typeORMService;
    private readonly authService;
    private readonly userRepository;
    constructor(tokenService: TokenService, environmentService: EnvironmentService, typeORMService: TypeORMService, authService: AuthService, userRepository: Repository<User>);
    googleAuth(): Promise<void>;
    googleAuthRedirect(req: GoogleRequest, res: Response): Promise<void>;
}
