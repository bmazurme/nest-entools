import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { RainRunoffItemsService } from './rain-runoff-items.service';
import { CreateRainRunoffItemDto } from './dto/create-rain-runoff-item.dto';
import { UpdateRainRunoffItemDto } from './dto/update-rain-runoff-item.dto';

@Controller('rain-runoff-items')
export class RainRunoffItemsController {
  constructor(
    private readonly rainRunoffItemsService: RainRunoffItemsService,
  ) {}

  @Post()
  create(@Body() createRainRunoffItemDto: CreateRainRunoffItemDto) {
    return this.rainRunoffItemsService.create(createRainRunoffItemDto);
  }

  @Get()
  findAll() {
    return this.rainRunoffItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rainRunoffItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRainRunoffItemDto: UpdateRainRunoffItemDto,
  ) {
    return this.rainRunoffItemsService.update(+id, updateRainRunoffItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rainRunoffItemsService.remove(+id);
  }
}
