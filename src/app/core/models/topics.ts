import { PlaylistDetail } from "./playlist";

export interface Topic {
  title: string;
  key: string;
  backgroundColor: string;
  description: string;
  coverImageURL: string;
  thumbURL: string;
}

export interface TopicDetail {
  title: string;
  key: string;
  description: string;
  coverImageURL: string;
  playlist: PlaylistDetail[];
}

export interface TopicEvent {
  groupName: string;
  listPlaylist: PlaylistDetail[];
}