import { Injectable } from '@nestjs/common';
import { CreateRainRoofDto } from './dto/create-rain-roof.dto';
import { UpdateRainRoofDto } from './dto/update-rain-roof.dto';

@Injectable()
export class RainRoofsService {
  create(createRainRoofDto: CreateRainRoofDto) {
    return 'This action adds a new rainRoof';
  }

  findAll() {
    return `This action returns all rainRoofs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rainRoof`;
  }

  update(id: number, updateRainRoofDto: UpdateRainRoofDto) {
    return `This action updates a #${id} rainRoof`;
  }

  remove(id: number) {
    return `This action removes a #${id} rainRoof`;
  }
}
