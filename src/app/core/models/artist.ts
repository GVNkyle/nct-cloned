import { Playlist } from "./playlist";
import { ListSong, SongDetail } from "./song";
import { Video } from "./video";

export interface Artist {
  artistId: number;
  name: string;
  shortLink: string;
  imageUrl: string;
  link?: string;
  coverImageURL: string;
}

export interface ArtistDetails {
  status: string;
  artist: Artist;
  playlist: Playlist;
  song: ListSong;
  songNearly: SongDetail[];
  video: Video;
  clientIp: string;
  time: number;
}

export interface TrendingArtists{
  name: string;
  shortLink: string;
  imageUrl: string;
  songTitle: string;
  songKey: string;
  position: number;
  oldPosition: number;
  createdDate: string;
}