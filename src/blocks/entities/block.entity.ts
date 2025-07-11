import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Document } from '../../documents/entities/document.entity';
import { RainRunoffItem } from '../../rain-runoff-items/entities/rain-runoff-item.entity';

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
  })
  @JoinColumn({ name: 'document_id' })
  document: Document;

  @OneToMany(() => RainRunoffItem, (rainRunoffItem) => rainRunoffItem.block)
  items: RainRunoffItem;
}
