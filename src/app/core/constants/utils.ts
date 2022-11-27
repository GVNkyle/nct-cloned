import { Song } from "@models/song";
import { HISTORY } from '@constants/local-storage';

export const imgNotFound =
    "https://stc-id.nixcdn.com/v12/static/media/default_song_no_cover.a876da66.png";

export const img404 =
    "https://raw.githubusercontent.com/an678-mhg/NextComics/main/public/not-found.png";

export const forceDownloadFile = (url: string) => {
    const anchor = document.createElement("a");
    anchor.target = "_blank";
    anchor.href = url;
    anchor.download = url;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};

export const addMusicFromLocal = (song: Song): void => {
    let historyMusic: Song[] = JSON.parse(localStorage.getItem(HISTORY) as string) || [];
    const existsMusic = historyMusic.some((item) => item.key === song.key);
    if(existsMusic){
        historyMusic = historyMusic.filter((item) => item.key !== song.key);
    }
    historyMusic.unshift(song);
    localStorage.setItem(HISTORY, JSON.stringify(historyMusic));
}

export const getMusicFromLocal = () => {
    let historyMusic: Song[] = JSON.parse(localStorage.getItem(HISTORY) as string) || [];
    return historyMusic
}