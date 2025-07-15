import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Document } from '../../documents/entities/document.entity';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class Block extends BaseEntity {
  @Column({
    nullable: false,
    length: 100,
  })
  name: string;

  @Column({
    nullable: false,
  })
  index: number;

  @ManyToOne(() => Document, (document) => document.blocks, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'document_id' })
  document: Document;

  @OneToMany(() => Item, (rainRunoffItem) => rainRunoffItem.block, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  items: Item;
}
