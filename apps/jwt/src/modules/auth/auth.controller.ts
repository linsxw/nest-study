import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    console.log('auth-login ：执行');
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('info')
  getUserInfo(@Req() req) {
    return req.user;
  }
}
