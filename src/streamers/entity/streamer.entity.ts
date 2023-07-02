import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StreamingPlatformsEntity } from '../../streaming-platforms/entity/streaming-platforms.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Streamer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Pago', description: 'Streamer name' })
  @Column({
    type: 'varchar',
  })
  streamerName: string;

  @ApiProperty({
    example: 'Pago is very creative streamer',
    description: 'Streamer description',
  })
  @Column()
  streamerDescription: string;

  @ApiProperty({
    example:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
    description: 'Streamer image',
  })
  @Column({
    default:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
  })
  image: string;

  @ApiProperty({
    description: 'Streamer votes (up)',
  })
  @Column({
    default: 1,
  })
  @ApiProperty({
    description: 'Streamer votes (down)',
  })
  upvotes: number;

  @Column({
    default: 0,
  })
  downvotes: number;

  @CreateDateColumn()
  createdAt: string;

  @ManyToMany(() => StreamingPlatformsEntity)
  @JoinTable()
  streamingPlatforms: StreamingPlatformsEntity[];
}
