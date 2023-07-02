import { Test, TestingModule } from '@nestjs/testing';
import { StreamingPlatformsService } from './streaming-platforms.service';

describe('StreamingPlatformsService', () => {
  let service: StreamingPlatformsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamingPlatformsService],
    }).compile();

    service = module.get<StreamingPlatformsService>(StreamingPlatformsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
