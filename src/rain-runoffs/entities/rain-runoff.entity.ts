import { Column, Entity, OneToOne } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';
import { Item } from '../../items/entities/item.entity';

@Entity()
export class RainRunoff extends BaseEntity {
  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  roof: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  pavements: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  tracks: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  ground: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  cobblestone: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  stone: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  lawns: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  place: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  intensity: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  condition: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  timeInit: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  lengthPipe: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  lengthTray: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  velocityPipe: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  velocityTray: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  flow: number;

  @Column({
    nullable: false,
    default: 0,
  })
  zone: number;

  @Column({
    nullable: false,
    default: 0,
  })
  type: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'float',
  })
  qr: number;

  @OneToOne(() => Item, (item) => item.rainRunoff)
  // @JoinColumn()
  item: Item;
}
