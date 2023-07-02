import { IsEnum } from 'class-validator';
import { StreamingPlatform } from '../../types/types';

export class NewStreamingPlatformDto {
  @IsEnum(StreamingPlatform)
  streamingPlatform: StreamingPlatform;
}
