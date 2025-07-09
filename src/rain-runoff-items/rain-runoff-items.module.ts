import { Module } from '@nestjs/common';
import { RainRunoffItemsService } from './rain-runoff-items.service';
import { RainRunoffItemsController } from './rain-runoff-items.controller';

@Module({
  controllers: [RainRunoffItemsController],
  providers: [RainRunoffItemsService],
})
export class RainRunoffItemsModule {}
