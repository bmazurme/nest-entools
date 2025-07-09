import { Test, TestingModule } from '@nestjs/testing';
import { RainRunoffItemsService } from './rain-runoff-items.service';

describe('RainRunoffItemsService', () => {
  let service: RainRunoffItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RainRunoffItemsService],
    }).compile();

    service = module.get<RainRunoffItemsService>(RainRunoffItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
