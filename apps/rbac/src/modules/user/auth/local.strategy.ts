import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-local';
import { UserService } from '../user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private moduleRef: ModuleRef) {
    super({ passReqToCallback: true });
  }

  /**
   * 验证用户名和密码 如果有user 则会把user挂载到req.user上
   * @param username 用户名
   * @param password 密码
   * @returns
   */
  async validate(
    req: Request,
    username: string,
    password: string,
  ): Promise<any> {
    const ctxId = ContextIdFactory.getByRequest(req);
    const userService = await this.moduleRef.resolve(UserService, ctxId);
    const user = await userService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
