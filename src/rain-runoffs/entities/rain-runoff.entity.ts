import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class RainRunoff extends BaseEntity {
  @Column({
    nullable: false,
    length: 100,
  })
  name: string;

  @Column({
    nullable: false,
  })
  roof: number;

  @Column({
    nullable: false,
  })
  pavements: number;

  @OneToOne(() => Item, (item) => item.rainRunoff)
  @JoinColumn()
  item: Item;
}
