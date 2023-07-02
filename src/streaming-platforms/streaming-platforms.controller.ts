import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { StreamingPlatformsService } from './streaming-platforms.service';
import { NewStreamingPlatformDto } from './dto/new-streaming-platform.dto';
import { StreamingPlatformsEntity } from './entity/streaming-platforms.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('streaming-platforms')
export class StreamingPlatformsController {
  constructor(private streamsService: StreamingPlatformsService) {}

  @Post('new')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create new streaming platform' })
  @ApiResponse({
    status: 201,
    description: 'Create streaming platform',
    type: StreamingPlatformsEntity,
  })
  createStreamingPlatform(
    @Body() streamingPlatform: NewStreamingPlatformDto,
  ): Promise<{
    created: boolean;
  }> {
    return this.streamsService.createNewStreamingPlatform(streamingPlatform);
  }

  @Delete('delete')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete all streaming platforms' })
  @ApiResponse({
    status: 204,
    description: 'Delete all streaming platforms',
  })
  deleteStreamingPlatform(): Promise<void> {
    return StreamingPlatformsEntity.clear();
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all streaming platforms' })
  @ApiResponse({
    status: 200,
    description: 'Get all streaming platforms',
  })
  getAllStreamingPlatforms(): Promise<StreamingPlatformsEntity[]> {
    return this.streamsService.getAllStreamingPlatforms();
  }

  @Get('/details')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get single info about streaming platform' })
  @ApiResponse({
    status: 200,
    description: 'Get single info about streaming platform',
  })
  findStreamingPlatform(@Query() query): Promise<StreamingPlatformsEntity> {
    const { info } = query;
    return this.streamsService.findStreamingPlatform(info);
  }
}
