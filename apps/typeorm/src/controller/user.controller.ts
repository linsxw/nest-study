import { Controller, Get, HttpException } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  test() {
    throw new HttpException('测试下公共', 500);
    return 'test';
  }

  @Get('list')
  list() {
    return [];
  }
}
