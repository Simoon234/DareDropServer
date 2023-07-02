import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StreamingPlatformsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Twitch',
    description: 'Streaming platform',
  })
  @Column()
  streamingPlatform: string;

  @ApiProperty({
    example: 'Twitch is an American video live...',
    description: 'Streaming platform description',
  })
  @Column()
  streamingPlatformDescription: string;
}
