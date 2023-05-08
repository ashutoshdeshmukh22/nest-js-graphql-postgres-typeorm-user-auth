import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare const Roles: {
    ADMIN: string;
    NORMAL_USER: string;
};
export declare class RoleGuard implements CanActivate {
    role: string;
    constructor(role: string);
    canActivate(context: ExecutionContext): boolean;
}
