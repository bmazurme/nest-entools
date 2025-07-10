import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Document } from '../../documents/entities/document.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Project extends BaseEntity {
  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  address: string;

  @OneToMany(() => Document, (document) => document.project)
  documents: Document[];

  // Связь с создателем проекта
  @ManyToOne(() => User, (user) => user.projects, {
    nullable: false, // Создатель обязателен
    onDelete: 'CASCADE', // При удалении пользователя удаляем и проекты
  })
  @JoinColumn({ name: 'creatorId' }) // Название колонки в БД
  creator: User;
}
