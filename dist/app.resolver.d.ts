import { User } from './user/entity/user.entity';
export declare class AppResolver {
    index(): string;
    securedResource(user: any): string;
    securedDatForAdmin(user: any): string;
    securedDataForNormalUser(user: any): string;
    login(email: string, password: string, user: User): string;
}
