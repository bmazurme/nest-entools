/**
 * Импортируем необходимые типы и декораторы из TypeORM
 * @packageDocumentation
 */
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
 * @extends BaseEntity
 */
@Entity({ name: 'users' })
export class User extends BaseEntity {
  /**
   * Уникальный email пользователя
   * @type {string}
   */
  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  /**
   * Статус активности пользователя
   * @type {boolean}
   */
  @Column({ type: 'boolean', default: false, nullable: false })
  isActive: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  firstName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  /**
   * Связь "многие ко многим" с ролями пользователя
   * @type {Role[]}
   */
  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'roleId', referencedColumnName: 'id' },
  })
  roles: Role[];

  /**
   * Связь "один ко многим" с проектами, где пользователь является создателем
   * @type {Project[]}
   */
  // Обратная связь к проектам
  @OneToMany(() => Project, (project) => project.creator)
  projects: Project[];

  /**
   * Метод для обновления ролей пользователя
   * @param {Role[]} newRoles - массив новых ролей
   * @param {EntityManager} manager - менеджер сущности для сохранения изменений
   * @returns {Promise<void>}
   */
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
