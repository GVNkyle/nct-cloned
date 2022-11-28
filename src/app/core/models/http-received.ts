import { Keyword, Ranking } from ".";
import { Artist, TrendingArtists } from "./artist";
import { Lyric } from "./lyric";
import { PlaylistDetail } from "./playlist";
import { SongDetail } from "./song";
import { Topic, TopicDetail } from "./topics";
import { VideoDetail } from "./video";

export interface HttpReceived {
    status: string;
    time: number;
    song?: SongDetail;
    lyric?: Lyric;
    clientIp?: string;
    artist?: Artist[];
    ranking?: Ranking;
    artistTrending?: TrendingArtists[];
    topkeyword?: Keyword[];
    playlist?: PlaylistDetail;
    topic?: TopicDetail | Topic[];
    video: VideoDetail;
    total: number;
    data: SongDetail[] | PlaylistDetail[] | VideoDetail[];
}