import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { DbModule } from '@libs/db';

@Module({
  imports: [DbModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class JwtModule {}
