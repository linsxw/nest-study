import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.model';

@Entity('sys_user')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '主键' })
  id: number;

  @Column()
  @ApiProperty({ description: '用户名' })
  username: string;

  @Column()
  @ApiProperty({ description: '密码' })
  password: string;

  @Column()
  @ApiProperty({ description: '状态' })
  status: number;

  @CreateDateColumn({ name: 'create_time' })
  @ApiProperty({ description: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  @ApiProperty({ description: '更新时间' })
  updateTime: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'sys_user_role',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: Role[];
}
