import { Injectable } from '@nestjs/common';
import { CreateRainRunoffItemDto } from './dto/create-rain-runoff-item.dto';
import { UpdateRainRunoffItemDto } from './dto/update-rain-runoff-item.dto';

@Injectable()
export class RainRunoffItemsService {
  create(createRainRunoffItemDto: CreateRainRunoffItemDto) {
    return 'This action adds a new rainRunoffItem';
  }

  findAll() {
    return `This action returns all rainRunoffItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rainRunoffItem`;
  }

  update(id: number, updateRainRunoffItemDto: UpdateRainRunoffItemDto) {
    return `This action updates a #${id} rainRunoffItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} rainRunoffItem`;
  }
}
