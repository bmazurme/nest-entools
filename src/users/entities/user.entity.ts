import {
  Entity,
  Column,
  JoinTable,
  ManyToMany,
  EntityManager,
  OneToMany,
} from 'typeorm';

import { Role } from '../../roles/entities/role.entity';
import { BaseEntity } from '../../common/entities/base.entity';
import { Project } from '../../projects/entities/project.entity';

/**
 * Сущность пользователя
 * Представляет модель пользователя системы
 *
 * @category Entities
 * @class User
 */
@Entity({ name: 'users' })
export class User extends BaseEntity {
  /**
   * Уникальный email пользователя
   * Должен быть уникальным в системе
   * Максимальная длина 255 символов
   *
   * @type {string}
   * @required
   */
  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  /**
   * Статус активности пользователя
   * По умолчанию установлен в false
   *
   * @type {boolean}
   * @default false
   * @required
   */
  @Column({ type: 'boolean', default: false, nullable: false })
  isActive: boolean;

  /**
   * Массив ролей пользователя
   * Связь многие-ко-многим с сущностью Role
   * Хранится в промежуточной таблице user_roles
   *
   * @type {Role[]}
   * @manyToMany
   */
  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Role[];

  // Обратная связь к проектам
  @OneToMany(() => Project, (project) => project.creator)
  projects: Project[];

  async updateRoles(newRoles: Role[], manager: EntityManager): Promise<void> {
    try {
      this.roles = [];
      this.roles = newRoles;
      await manager.save(this);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Не удалось обновить роли пользователя');
    }
  }
}
