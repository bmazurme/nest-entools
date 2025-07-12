import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Post()
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @Get('/document:id')
  findByProject(@Param('id') id: string) {
    return this.blocksService.findByDocument(+id);
  }

  @Get()
  findAll() {
    return this.blocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocksService.findOne(+id);
  }

  @Patch('/document:id')
  refreshBlocks(
    @Param('id') id: string,
    @Body() updateBlockDto: UpdateBlockDto & { id: number; index: number }[],
  ) {
    return this.blocksService.refreshBlocks(+id, updateBlockDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(+id, updateBlockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blocksService.remove(+id);
  }
}
