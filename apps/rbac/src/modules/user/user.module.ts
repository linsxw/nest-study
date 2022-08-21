import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { LocalStrategy } from './auth/local.strategy';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'linsxww',
      signOptions: { expiresIn: '1day' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, LocalStrategy, JwtStrategy, RolesGuard],
})
export class UserModule {}
