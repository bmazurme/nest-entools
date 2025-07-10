import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RainRunoffItemsService } from './rain-runoff-items.service';
import { RainRunoffItemsController } from './rain-runoff-items.controller';
import { RainRunoffItem } from './entities/rain-runoff-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RainRunoffItem])],
  controllers: [RainRunoffItemsController],
  providers: [RainRunoffItemsService],
  exports: [RainRunoffItemsService],
})
export class RainRunoffItemsModule {}
