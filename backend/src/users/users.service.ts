import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  getRegisterPage(): string {
    return 'Register page';
  }
}
