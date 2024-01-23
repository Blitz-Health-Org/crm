import { User } from 'src/core/user/user.entity';
import { FeatureFlagEntity } from 'src/core/feature-flag/feature-flag.entity';
export declare class Workspace {
    id: string;
    domainName?: string;
    displayName?: string;
    logo?: string;
    inviteHash?: string;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    users: User[];
    allowImpersonation: boolean;
    featureFlags: FeatureFlagEntity[];
    subscriptionStatus: 'incomplete' | 'active' | 'canceled';
}
