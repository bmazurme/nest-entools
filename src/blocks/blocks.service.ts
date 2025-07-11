import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Block } from './entities/block.entity';

@Injectable()
export class BlocksService {
  constructor(
    @InjectRepository(Block)
    private readonly blockRepository: Repository<Block>,
  ) {}

  async create(createBlockDto: CreateBlockDto) {
    return await this.blockRepository.save(createBlockDto);
  }

  async findAll() {
    return await this.blockRepository.find();
  }

  async findOne(id: number) {
    return await this.blockRepository.findOne({ where: { id } });
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return this.blockRepository.update(+id, updateBlockDto);
  }

  remove(id: number) {
    return this.blockRepository.delete(id);
  }
}
