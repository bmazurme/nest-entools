import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Block } from '../../blocks/entities/block.entity';

@Entity()
export class RainRunoffItem extends BaseEntity {
  @Column({
    nullable: false,
    length: 100,
  })
  name: string;

  @Column({
    nullable: false,
  })
  index: number;

  @ManyToOne(() => Block, (block) => block.items, {
    nullable: false,
  })
  @JoinColumn({ name: 'blockId' })
  block: Block;
}
