import { Module } from '@nestjs/common';
import { StreamingPlatformsController } from './streaming-platforms.controller';
import { StreamingPlatformsService } from './streaming-platforms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamingPlatformsEntity } from './entity/streaming-platforms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StreamingPlatformsEntity])],
  controllers: [StreamingPlatformsController],
  providers: [StreamingPlatformsService],
})
export class StreamingPlatformsModule {}
