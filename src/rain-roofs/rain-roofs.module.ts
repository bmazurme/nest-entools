import { Module } from '@nestjs/common';
import { RainRoofsService } from './rain-roofs.service';
import { RainRoofsController } from './rain-roofs.controller';

@Module({
  controllers: [RainRoofsController],
  providers: [RainRoofsService],
})
export class RainRoofsModule {}
