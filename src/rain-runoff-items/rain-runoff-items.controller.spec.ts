import { Test, TestingModule } from '@nestjs/testing';
import { RainRunoffItemsController } from './rain-runoff-items.controller';
import { RainRunoffItemsService } from './rain-runoff-items.service';

describe('RainRunoffItemsController', () => {
  let controller: RainRunoffItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RainRunoffItemsController],
      providers: [RainRunoffItemsService],
    }).compile();

    controller = module.get<RainRunoffItemsController>(RainRunoffItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
