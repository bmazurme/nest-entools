import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './entities/item.entity';

import { RainRunoffsModule } from '../rain-runoffs/rain-runoffs.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), RainRunoffsModule],
  controllers: [ItemsController],
  providers: [ItemsService, RainRunoffsModule],
  exports: [ItemsService],
})
export class ItemsModule {}
