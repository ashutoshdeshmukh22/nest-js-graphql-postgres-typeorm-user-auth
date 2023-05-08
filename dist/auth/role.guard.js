"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = exports.Roles = void 0;
const graphql_1 = require("@nestjs/graphql");
exports.Roles = {
    ADMIN: 'ADMIN',
    NORMAL_USER: 'NORMAL_USER',
};
class RoleGuard {
    constructor(role) {
        this.role = role;
    }
    canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
        const { role } = ctx.user;
        if (role === this.role)
            return true;
        return false;
    }
}
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map