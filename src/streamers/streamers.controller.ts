import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Streamer } from './entity/streamer.entity';
import { StreamersService } from './streamers.service';
import { NewStreamer } from './dto/new-streamer.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AllStreamersI, FindStreamerI } from 'src/types/types';

@Controller('streamers')
export class StreamersController {
  constructor(private streamers: StreamersService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all streamers' })
  @ApiResponse({
    status: 200,
    description: 'All streamers',
    type: Streamer,
  })
  getAllStreamers(
    @Query() query: { page: string; itemsOnPage: string },
  ): Promise<AllStreamersI> {
    const { page, itemsOnPage } = query;
    return this.streamers.getAllStreamers(page, itemsOnPage);
  }

  @Get('/details/:id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
    description: 'Single streamer',
    type: Streamer,
  })
  @ApiOperation({ summary: 'Get single streamer' })
  findStreamer(@Param('id') id: string): Promise<FindStreamerI> {
    return this.streamers.findStreamer(id);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create streamer' })
  @ApiResponse({
    status: 201,
    description: 'New streamer created',
    type: NewStreamer,
  })
  addNewStreamer(
    @Body() streamer: NewStreamer,
  ): Promise<{ createdStreamers: boolean }> {
    return this.streamers.createStreamer(streamer);
  }

  @Delete('/')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete all streamers' })
  @ApiResponse({ status: 204, description: 'Delete all streamers' })
  removeAll(): Promise<void> {
    return Streamer.clear();
  }

  @Put('/:id/vote')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update votes' })
  @ApiResponse({ status: 200, description: 'Vote for your streamer' })
  voteUserUp(
    @Param('id') id: string,
    @Query() query,
  ): Promise<{
    voted: boolean;
  }> {
    const { type } = query;

    return this.streamers.voteStreamerUp(id, type);
  }
}
