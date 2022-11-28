import {
  Ranking,
  Showcase,
  Top100
} from "@models/index";
import { Topic, TopicEvent } from "@models/topics";
import { Song } from "./song";
import { VideoDetail } from "./video";

export interface NewRelease {
  song: Song[];
  playlist: any[];
}
export interface HomeData {
  status: string;
  newRelease: NewRelease;
  ranking: Ranking;
  showcase: Showcase[];
  song: Song[];
  top100: Top100[];
  topic: Topic[];
  topicEvent: TopicEvent[];
  video: VideoDetail[];
  clientIp: string;
  time: number;
}
