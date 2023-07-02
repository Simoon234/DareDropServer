import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Streamer } from './entity/streamer.entity';
import { NewStreamer } from './dto/new-streamer.dto';
import { StreamingPlatformsEntity } from '../streaming-platforms/entity/streaming-platforms.entity';
import { AllStreamersI, FindStreamerI } from 'src/types/types';

@Injectable()
export class StreamersService {
  async getAllStreamers(
    page: string,
    itemsOnPage: string,
  ): Promise<AllStreamersI> {
    let currentPage = page || 1;
    let currentItemsOnPage = itemsOnPage || 5;

    if (Number(page) === 0) {
      currentPage = 1;
    }

    if (Number(itemsOnPage) === 0) {
      currentItemsOnPage = 1;
    }

    const allStreamersCounted = await Streamer.count();

    const streamers = await Streamer.find({
      relations: {
        streamingPlatforms: true,
      },
      order: {
        createdAt: 'DESC',
      },
      take: Number(currentItemsOnPage),
      skip: Number(currentItemsOnPage) * (Number(currentPage) - 1),
    });

    const totalPages = Math.ceil(
      allStreamersCounted / Number(currentItemsOnPage),
    );

    return {
      streamers,
      totalStreamersCount: allStreamersCounted,
      totalPages,
    };
  }

  async createStreamer(streamer: NewStreamer): Promise<{
    createdStreamers: boolean;
  }> {
    const { streamerName, streamingPlatform, streamerDescription } = streamer;

    const checkIfStreamerExist = await Streamer.findOne({
      where: {
        streamerName,
      },
    });

    if (checkIfStreamerExist) {
      throw new BadRequestException('Streamer already exists');
    }

    const findStreamingPlatform = await StreamingPlatformsEntity.findOne({
      where: {
        streamingPlatform,
      },
    });

    if (!findStreamingPlatform) {
      throw new NotFoundException();
    }

    const newStreamer = new Streamer();
    newStreamer.streamerName = streamerName;
    newStreamer.streamerDescription = streamerDescription;
    newStreamer.streamingPlatforms = [findStreamingPlatform];
    await newStreamer.save();
    return {
      createdStreamers: true,
    };
  }

  async findStreamerById(id: string): Promise<{
    streamer: Streamer;
  }> {
    const streamer = await Streamer.findOne({
      where: {
        id,
      },
    });

    if (!streamer) {
      throw new NotFoundException('Streamer not found');
    }

    return {
      streamer,
    };
  }

  async voteStreamerUp(
    streamerId: string,
    type: 'plus' | 'minus',
  ): Promise<{
    voted: boolean;
  }> {
    if (type !== 'plus' && type !== 'minus') {
      throw new BadRequestException(`${type} is not supported`);
    }
    const { streamer } = await this.findStreamerById(streamerId);
    if (type === 'plus') {
      await Streamer.update(streamer.id, {
        upvotes: streamer.upvotes + 1,
      });
    } else {
      await Streamer.update(streamer.id, {
        downvotes: streamer.downvotes - 1,
      });
    }

    return {
      voted: true,
    };
  }

  async findStreamer(id: string): Promise<FindStreamerI> {
    const streamer = await Streamer.findOne({
      where: {
        id,
      },
      relations: {
        streamingPlatforms: true,
      },
    });

    if (!streamer) {
      throw new NotFoundException('User not found');
    }

    return {
      id: streamer.id,
      streamerName: streamer.streamerName,
      streamerDescription: streamer.streamerDescription,
      image: streamer.image,
      platform: streamer.streamingPlatforms[0].streamingPlatform,
    };
  }
}
