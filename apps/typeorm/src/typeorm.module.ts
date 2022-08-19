import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';

@Module({
  imports: [DbModule],
  controllers: [UserController],
  providers: [],
})
export class TypeormModule {}
