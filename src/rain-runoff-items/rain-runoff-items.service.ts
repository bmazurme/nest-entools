import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { CreateRainRunoffItemDto } from './dto/create-rain-runoff-item.dto';
import { UpdateRainRunoffItemDto } from './dto/update-rain-runoff-item.dto';
import { RainRunoffItem } from './entities/rain-runoff-item.entity';

@Injectable()
export class RainRunoffItemsService {
  constructor(
    @InjectRepository(RainRunoffItem)
    private readonly rainRunoffItemRepository: Repository<RainRunoffItem>,
  ) {}

  async create(createRainRunoffItemDto: CreateRainRunoffItemDto) {
    return await this.rainRunoffItemRepository.save(createRainRunoffItemDto);
  }

  findAll() {
    return this.rainRunoffItemRepository.find();
  }

  findOne(id: number) {
    return this.rainRunoffItemRepository.findOne({ where: { id } });
  }

  update(id: number, updateRainRunoffItemDto: UpdateRainRunoffItemDto) {
    return this.rainRunoffItemRepository.update(+id, updateRainRunoffItemDto);
  }

  remove(id: number) {
    return this.rainRunoffItemRepository.delete(id);
  }

  async findByBlock(blockId: number) {
    const items = await this.rainRunoffItemRepository.find({
      where: { block: { id: blockId } },
    });

    return { id: blockId, items };
  }

  async refreshItems(updateRainRunoffItemDto: UpdateRainRunoffItemDto[]) {
    await this.rainRunoffItemRepository.manager.transaction(
      async (transactionalEntityManager) => {
        for (const dto of updateRainRunoffItemDto) {
          await transactionalEntityManager.update(
            RainRunoffItem,
            { id: dto.id },
            {
              index: dto.index,
              block: { id: parseInt(dto.column.split('_')[1], 10) },
            },
          );
        }
      },
    );

    return this.rainRunoffItemRepository.find({
      where: { id: In(updateRainRunoffItemDto.map((d) => d.id)) },
      relations: ['block'],
    });
  }
}
