import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [DbModule],
  controllers: [UserController],
  providers: [UserService],
})
export class TypeormModule {}
