import { User } from '@libs/db/models/user.model';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 校验用户名和密码
   * @param username
   * @param pass
   * @returns
   */
  async validateUser(username: string, pass: string): Promise<any> {
    console.log('auth-validateUser ：执行');
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  /**
   * 登录并且返回token
   * @param user
   * @returns
   */
  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
