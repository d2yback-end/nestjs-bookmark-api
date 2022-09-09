import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getMe() {
    return 'user info';
  }
}
