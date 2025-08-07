import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'roles' })
export class Role extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable({
    name: 'userRoles',
    joinColumn: { name: 'roleId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' },
  })
  users: User[];
}
