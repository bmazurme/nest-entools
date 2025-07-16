import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRainRunoffDto } from './dto/create-rain-runoff.dto';
import { UpdateRainRunoffDto } from './dto/update-rain-runoff.dto';

import { RainRunoff } from './entities/rain-runoff.entity';

@Injectable()
export class RainRunoffsService {
  constructor(
    @InjectRepository(RainRunoff)
    private readonly rainRunoffRepository: Repository<RainRunoff>,
  ) {}
  create(createRainRunoffDto: CreateRainRunoffDto) {
    return this.rainRunoffRepository.save(createRainRunoffDto);
  }

  findAll() {
    return `This action returns all rainRunoffs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rainRunoff`;
  }

  update(id: number, updateRainRunoffDto: UpdateRainRunoffDto) {
    return this.rainRunoffRepository.update(+id, updateRainRunoffDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} rainRunoff`;
  // }
}
