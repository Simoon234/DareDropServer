import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamersModule } from './streamers/streamers.module';
import { Streamer } from './streamers/entity/streamer.entity';
import { StreamingPlatformsModule } from './streaming-platforms/streaming-platforms.module';
import { StreamingPlatformsEntity } from './streaming-platforms/entity/streaming-platforms.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'streamer',
      entities: [Streamer, StreamingPlatformsEntity],
      synchronize: true,
    }),
    StreamersModule,
    StreamingPlatformsModule,
  ],
})
export class AppModule {}
