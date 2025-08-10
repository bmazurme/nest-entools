import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { RainRunoffsService } from '../rain-runoffs/rain-runoffs.service';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    private readonly rainRunoffRepository: RainRunoffsService,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const rainRunoff = await this.rainRunoffRepository.create({
      // id: 0,
      roof: 0,
      pavements: 0,
      tracks: 0,
      ground: 0,
      cobblestone: 0,
      stone: 0,
      lawns: 0,
      place: 0,
      intensity: 0,
      condition: 0,
      timeInit: 0,
      lengthPipe: 0,
      lengthTray: 0,
      velocityPipe: 0,
      velocityTray: 0,
      flow: 0,
    });

    return await this.itemRepository.save({ ...createItemDto, rainRunoff });
  }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOne({ where: { id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update(+id, updateItemDto);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }

  async findByBlock(blockId: number) {
    const items = await this.itemRepository.find({
      where: { block: { id: blockId } },
    });

    return { id: blockId, items };
  }

  async refreshItems(updateItemDto: UpdateItemDto[]) {
    await this.itemRepository.manager.transaction(
      async (transactionalEntityManager) => {
        for (const dto of updateItemDto) {
          await transactionalEntityManager.update(
            Item,
            { id: dto.id },
            {
              index: dto.index,
              block: { id: parseInt(dto.column.split('_')[1], 10) },
            },
          );
        }
      },
    );

    return this.itemRepository.find({
      where: { id: In(updateItemDto.map((d) => d.id)) },
      relations: ['block'],
    });
  }
}
