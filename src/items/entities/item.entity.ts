import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Block } from '../../blocks/entities/block.entity';
import { RainRunoff } from '../../rain-runoffs/entities/rain-runoff.entity';
import { RainRoof } from '../../rain-roofs/entities/rain-roof.entity';

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
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  rainRunoff: RainRunoff;

  @OneToOne(() => RainRoof, (rainRoof) => rainRoof.item, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  rainRoof: RainRoof;

  @ManyToOne(() => Block, (block) => block.items, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'blockId' })
  block: Block;
}
