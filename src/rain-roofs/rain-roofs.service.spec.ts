import { Test, TestingModule } from '@nestjs/testing';
import { RainRoofsService } from './rain-roofs.service';

describe('RainRoofsService', () => {
  let service: RainRoofsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RainRoofsService],
    }).compile();

    service = module.get<RainRoofsService>(RainRoofsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
