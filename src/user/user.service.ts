import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) public userRepo: Repository<User>) {}

  async findUserByEmail(email: string): Promise<User> {
    const user: User = await this.userRepo.findOne({ where: { email: email } });
    return user;
  }
}
