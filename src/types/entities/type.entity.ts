import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Document } from '../../documents/entities/document.entity';

@Entity()
export class Type extends BaseEntity {
  @Column({
    nullable: false,
    unique: true,
    length: 100,
  })
  name: string;

  @Column({
    nullable: false,
    length: 255,
  })
  description: string;

  // Отношение к документам (обратное)
  @OneToMany(() => Document, (document) => document.type)
  documents: Document[];
}
