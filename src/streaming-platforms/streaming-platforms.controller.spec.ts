import { Test, TestingModule } from '@nestjs/testing';
import { StreamingPlatformsController } from './streaming-platforms.controller';

describe('StreamingPlatformsController', () => {
  let controller: StreamingPlatformsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamingPlatformsController],
    }).compile();

    controller = module.get<StreamingPlatformsController>(StreamingPlatformsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
