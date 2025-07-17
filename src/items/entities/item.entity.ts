import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Block } from '../../blocks/entities/block.entity';
import { RainRunoff } from '../../rain-runoffs/entities/rain-runoff.entity';

@Entity()
export class Item extends BaseEntity {
  @Column({
    nullable: false,
    length: 100,
  })
  name: string;

  @Column({
    nullable: false,
  })
  index: number;

  @OneToOne(() => RainRunoff, (rainRunoff) => rainRunoff.item, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  rainRunoff: RainRunoff;

  @ManyToOne(() => Block, (block) => block.items, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'blockId' })
  block: Block;
}
