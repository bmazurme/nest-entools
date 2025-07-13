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

  async findByDocument(documentId: number) {
    return await this.blockRepository.find({
      where: { document: { id: documentId } },
      relations: ['items'],
    });
  }

  async findAll() {
    return await this.blockRepository.find();
  }

  async findOne(id: number) {
    return await this.blockRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBlockDto: UpdateBlockDto) {
    return await this.blockRepository.update(+id, updateBlockDto);
  }

  async remove(id: number) {
    await this.blockRepository.delete(id);
    return id;
  }

  async refreshBlocks(
    documentId: number,
    updateBlockDto: UpdateBlockDto & { id: number; index: number }[],
  ) {
    const blocks = await this.blockRepository.find({
      where: { document: { id: documentId } },
    });

    blocks.forEach((item) => {
      const block = updateBlockDto.find((x) => x.id === item.id)!;
      item.index = block.index;
    });

    await this.blockRepository.save(blocks);

    return blocks;
  }
}
