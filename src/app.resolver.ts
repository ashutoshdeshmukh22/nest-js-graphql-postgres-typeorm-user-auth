import { UseGuards } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { User } from './user/entity/user.entity';
import * as jwt from 'jsonwebtoken';
import { JwtGuard } from './auth/jwt.guard';
import { RoleGuard, Roles } from './auth/role.guard';

@Resolver((of) => String)
export class AppResolver {
  @Query((returns) => String)
  index(): string {
    return 'Nest Js GraphQL Server';
  }

  @Query((returns) => String)
  @UseGuards(JwtGuard)
  securedResource(@Context('user') user: any): string {
    return 'This is Secured Data' + JSON.stringify(user);
  }

  @Query((returns) => String)
  @UseGuards(JwtGuard, new RoleGuard(Roles.ADMIN))
  securedDatForAdmin(@Context('user') user: any): string {
    return 'This is Secured Data For Admin' + JSON.stringify(user);
  }

  @Query((returns) => String)
  @UseGuards(JwtGuard, new RoleGuard(Roles.NORMAL_USER))
  securedDataForNormalUser(@Context('user') user: any): string {
    return 'This is Secured Data For Normal User' + JSON.stringify(user);
  }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ): string {
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    return jwt.sign(payload, 'secretKeyShouldBeComplex', { expiresIn: '60s' });
  }
}
