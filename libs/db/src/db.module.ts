import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './models/menu.model';
import { Role } from './models/role.model';
import { User } from './models/user.model';

const models = TypeOrmModule.forFeature([User, Role, Menu]);

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest-study',
      entities: [User, Role, Menu],
      synchronize: false,
      logging: true,
    }),
    models,
  ],
  providers: [],
  exports: [models],
})
export class DbModule {}
