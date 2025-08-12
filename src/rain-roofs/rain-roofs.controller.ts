import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RainRoofsService } from './rain-roofs.service';
import { CreateRainRoofDto } from './dto/create-rain-roof.dto';
import { UpdateRainRoofDto } from './dto/update-rain-roof.dto';

@Controller('rain-roofs')
export class RainRoofsController {
  constructor(private readonly rainRoofsService: RainRoofsService) {}

  @Post()
  create(@Body() createRainRoofDto: CreateRainRoofDto) {
    return this.rainRoofsService.create(createRainRoofDto);
  }

  @Get()
  findAll() {
    return this.rainRoofsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rainRoofsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRainRoofDto: UpdateRainRoofDto) {
    return this.rainRoofsService.update(+id, updateRainRoofDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rainRoofsService.remove(+id);
  }
}
