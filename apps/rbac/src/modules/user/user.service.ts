import { User } from '@libs/db/models/user.model';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 判断用户名和密码是否正确
   * @param username 用户名
   * @param pass 密码
   * @returns
   */
  async validateUser(username: string, pass: string): Promise<User | null> {
    // 数据库查询user
    const user = await this.repo.findOne({ where: { username } });
    // 判断密码是否正确
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  /**
   * 生成token
   * @param user 登录的用户
   * @returns
   */
  async loginAndGetToken(user: User): Promise<any> {
    // 根据id 和用户名生成token
    const payload = { username: user.username, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  /**
   * 根据ID获取用户信息
   * @param id
   * @returns
   */
  async getUserInfoById(id: number): Promise<User | null> {
    return await this.repo.findOne({ where: { id }, relations: ['roles'] });
  }

  /**
   * 创建用户
   * @param user
   * @returns
   */
  async createUser(user: User) {
    return await this.repo.insert(user);
  }
}
