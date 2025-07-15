import { Test, TestingModule } from '@nestjs/testing';
import { RainRunoffsService } from './rain-runoffs.service';

describe('RainRunoffsService', () => {
  let service: RainRunoffsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RainRunoffsService],
    }).compile();

    service = module.get<RainRunoffsService>(RainRunoffsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
