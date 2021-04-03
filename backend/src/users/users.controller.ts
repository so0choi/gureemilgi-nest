import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getRegisterPage(): string {
    return this.usersService.getRegisterPage();
  }
}
