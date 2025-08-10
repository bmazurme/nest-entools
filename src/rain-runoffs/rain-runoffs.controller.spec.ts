import { Test, TestingModule } from '@nestjs/testing';

import { RainRunoffsController } from './rain-runoffs.controller';
import { RainRunoffsService } from './rain-runoffs.service';

describe('RainRunoffsController', () => {
  let controller: RainRunoffsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RainRunoffsController],
      providers: [RainRunoffsService],
    }).compile();

    controller = module.get<RainRunoffsController>(RainRunoffsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
