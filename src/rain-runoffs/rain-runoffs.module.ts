import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RainRunoff } from './entities/rain-runoff.entity';
import { RainRunoffsService } from './rain-runoffs.service';
import { RainRunoffsController } from './rain-runoffs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RainRunoff])],
  controllers: [RainRunoffsController],
  providers: [RainRunoffsService],
  exports: [RainRunoffsService],
})
export class RainRunoffsModule {}
