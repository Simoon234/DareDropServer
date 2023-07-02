import { BadRequestException, Injectable } from '@nestjs/common';
import { StreamingPlatformsEntity } from './entity/streaming-platforms.entity';
import { NewStreamingPlatformDto } from './dto/new-streaming-platform.dto';
import { streamingPlatformDescriptionHelper } from '../utils/streamingPlatformDescription';

@Injectable()
export class StreamingPlatformsService {
  async createNewStreamingPlatform(data: NewStreamingPlatformDto): Promise<{
    created: boolean;
  }> {
    const { streamingPlatform } = data;

    const checkIfStreamingPlatformExists =
      await StreamingPlatformsEntity.findOne({
        where: {
          streamingPlatform,
        },
      });

    if (checkIfStreamingPlatformExists) {
      throw new BadRequestException('Streaming platform already exists');
    }

    const newStreamingPlatform = new StreamingPlatformsEntity();
    newStreamingPlatform.streamingPlatform = streamingPlatform;
    newStreamingPlatform.streamingPlatformDescription =
      streamingPlatformDescriptionHelper(streamingPlatform);

    await newStreamingPlatform.save();
    return {
      created: true,
    };
  }

  async getAllStreamingPlatforms(): Promise<StreamingPlatformsEntity[]> {
    return StreamingPlatformsEntity.find();
  }

  findStreamingPlatform(info: string): Promise<StreamingPlatformsEntity> {
    return StreamingPlatformsEntity.findOne({
      where: {
        streamingPlatform: info,
      },
    });
  }
}
