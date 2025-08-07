import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

import { Type } from './entities/type.entity';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  async create(createTypeDto: CreateTypeDto) {
    return await this.typeRepository.save(createTypeDto);
  }

  async findAll() {
    return await this.typeRepository.find();
  }

  async findOne(id: number) {
    return await this.typeRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.typeRepository.update(+id, updateTypeDto);
  }

  remove(id: number) {
    return this.typeRepository.delete(id);
  }
}
