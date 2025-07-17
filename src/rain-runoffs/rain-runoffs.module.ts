import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RainRunoffsService } from './rain-runoffs.service';
import { RainRunoffsController } from './rain-runoffs.controller';

import { RainRunoff } from './entities/rain-runoff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RainRunoff])],
  controllers: [RainRunoffsController],
  providers: [RainRunoffsService],
  exports: [RainRunoffsService],
})
export class RainRunoffsModule {}
