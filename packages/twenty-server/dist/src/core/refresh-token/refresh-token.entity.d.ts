import { User } from 'src/core/user/user.entity';
export declare class RefreshToken {
    id: string;
    user: User;
    userId: string;
    expiresAt: Date;
    deletedAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
