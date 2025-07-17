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
    const rainRunoff = await this.rainRunoffRepository.create({});
    // console.log(rainRunoff);
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
