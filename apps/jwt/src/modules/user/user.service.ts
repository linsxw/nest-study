import { User } from '@libs/db/models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  /**
   * 根据用户名查找一个用户
   * @param username
   * @returns
   */
  async findOne(username: string) {
    return this.repo.findOne({ where: { username } });
  }
}
