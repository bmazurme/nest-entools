import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // Delete,
} from '@nestjs/common';

import { RainRunoffsService } from './rain-runoffs.service';
import { CreateRainRunoffDto } from './dto/create-rain-runoff.dto';
import { UpdateRainRunoffDto } from './dto/update-rain-runoff.dto';

@Controller('rain-runoffs')
export class RainRunoffsController {
  constructor(private readonly rainRunoffsService: RainRunoffsService) {}

  @Post()
  create(@Body() createRainRunoffDto: CreateRainRunoffDto) {
    return this.rainRunoffsService.create(createRainRunoffDto);
  }

  @Get()
  findAll() {
    return this.rainRunoffsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rainRunoffsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRainRunoffDto: UpdateRainRunoffDto,
  ) {
    return this.rainRunoffsService.update(+id, updateRainRunoffDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rainRunoffsService.remove(+id);
  // }
}
