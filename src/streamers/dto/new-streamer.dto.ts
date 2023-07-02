import { IsEnum, IsString } from 'class-validator';
import { StreamingPlatform } from '../../types/types';

export class NewStreamer {
  @IsString()
  streamerName: string;

  @IsEnum(StreamingPlatform)
  streamingPlatform: StreamingPlatform;

  @IsString()
  streamerDescription: string;
}
