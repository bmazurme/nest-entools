import { Column, Entity, OneToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class RainRoof extends BaseEntity {
  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  areaRoof: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  areaFacade: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  n: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  q20: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  slope: number;

  @OneToOne(() => Item, (item) => item.rainRoof)
  item: Item;
}
