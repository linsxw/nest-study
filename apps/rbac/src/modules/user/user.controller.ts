import { User } from '@libs/db/models/user.model';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Roles } from './auth/roles.decorator';
import { RolesGuard } from './auth/roles.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * 登录接口
   * @param req
   * @returns
   */
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req) {
    // 当前方法是已经验证完用户名密码后才会调用 当前req.user是已经通过local-auth.guard验证过的用户信息
    return await this.userService.loginAndGetToken(req.user);
  }

  @Get('info')
  @UseGuards(JwtAuthGuard)
  async userInfo(@Req() req) {
    console.log(req.user);
    return await this.userService.getUserInfoById(req.user.id);
  }

  @Post('create')
  @Roles('user-admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() user: User) {
    await this.userService.createUser(user);
    return user;
  }
}
