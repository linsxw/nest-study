import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { MenuModule } from './modules/menu/menu.module';
import { DbModule } from '@libs/db';

@Module({
  imports: [DbModule, UserModule, RoleModule, MenuModule],
  controllers: [],
  providers: [],
})
export class RbacModule {}
