import { Streamer } from 'src/streamers/entity/streamer.entity';

export enum StreamingPlatform {
  Twitch = 'Twitch',
  Youtube = 'YouTube',
  Tiktok = 'TikTok',
  Kick = 'Kick',
  Rumble = 'Rumble',
}

export interface FindStreamerI {
  id: string;
  streamerName: string;
  streamerDescription: string;
  image: string;
  platform: string;
}

export interface AllStreamersI {
  streamers: Streamer[];
  totalStreamersCount: number;
  totalPages: number;
}
