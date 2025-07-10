import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    return this.rainRunoffItemRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateRainRunoffItemDto: UpdateRainRunoffItemDto) {
    return this.rainRunoffItemRepository.update(+id, updateRainRunoffItemDto);
  }

  remove(id: number) {
    return this.rainRunoffItemRepository.delete(id);
  }
}
