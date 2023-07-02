import { StreamingPlatform } from '../types/types';

export const streamingPlatformDescriptionHelper = (
  platform: StreamingPlatform,
) => {
  switch (platform) {
    case StreamingPlatform.Tiktok: {
      return `TikTok is a short-form video hosting service owned by ByteDance. It
            hosts user-submitted videos, which can range in duration from 3
            seconds to 10 minutes.`;
    }
    case StreamingPlatform.Kick: {
      return `Kick is a video live streaming service headquartered in Melbourne,
            Victoria, Australia. Backed by Stake.com co-founders Bijan Tehrani
            and Ed Craven and streaming personality Trainwreckstv, Kick was
            founded in 2022 as a competitor to Amazon-owned Twitch, with a focus
            on looser moderation and higher revenue shares for streamers. Kick
            is mostly known for its 5% revenue charge, among the lowest between
            streaming platforms, as well as its 2023 deals with multiple
            streamers formerly prominent on Twitch, most notably including chess
            grandmaster Hikaru Nakamura, Adin Ross, and xQc.`;
    }
    case StreamingPlatform.Twitch: {
      return `Twitch is an American video live streaming service that focuses on
            video game live streaming, including broadcasts of esports
            competitions, in addition to offering music broadcasts, creative
            content, and "in real life" streams. Twitch is operated by Twitch
            Interactive, a subsidiary of Amazon.com, Inc. It was introduced in
            June 2011 as a spin-off of the general-interest streaming platform
            Justin.tv. Content on the site can be viewed either live or via
            video on demand. The games shown on Twitch's current homepage are
            listed according to audience preference and include genres such as
            real-time strategy games (RTS), fighting games, racing games, and
            first-person shooters.`;
    }
    case StreamingPlatform.Youtube: {
      return `YouTube is an American online video sharing and social media
            platform headquartered in San Bruno, California, United States.
            Accessible worldwide it was launched on February 14, 2005, by Steve
            Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the
            second most visited website, after Google Search. YouTube has more
            than 2.5 billion monthly users who collectively watch more than one
            billion hours of videos each day. As of May 2019, videos were being
            uploaded at a rate of more than 500 hours of content per minute.`;
    }
    case StreamingPlatform.Rumble: {
      return `Rumble is an online video platform, web hosting and cloud services 
            business headquartered in Toronto, Ontario, with its U.S. headquarters 
            in Longboat Key, Florida. It was founded in October 2013 by Chris Pavlovski, 
            a Canadian technology entrepreneur. The cloud services business hosts Truth Social, 
            and the video platform is popular among American right and far-right users. 
            The platform has been described as "alt-tech".`;
    }
    default:
      return '';
  }
};
