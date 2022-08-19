import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async list() {
    return this.service.list();
  }
}
