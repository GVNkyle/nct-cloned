import {
  NewRelease,
  Ranking,
  Showcase,
  Song,
  Top100,
  TopicEvent,
  Video,
} from "@models/index";
import { Topic } from "@models/topics";


export interface HomeData {
  status: string;
  newRelease: NewRelease;
  ranking: Ranking;
  showcase: Showcase[];
  song: Song[];
  top100: Top100[];
  topic: Topic[];
  topicEvent: TopicEvent[];
  video: Video[];
  clientIp: string;
  time: number;
}
