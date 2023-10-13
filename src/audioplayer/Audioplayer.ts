import { Playlist } from "./types";

export const createAudioPlayer = (playlist: Playlist) => {
	let currentTrackIndex = 0;
	const audioElement: HTMLAudioElement = new Audio();

	/* ===  Track handling  === */;
	//#region

	const loadTrack = (index: number) => {
		audioElement.src = playlist[index].audioSrc;
		audioElement.load();
		currentTrackIndex = index;
	};
	//#endregion
    
	/* ===  Init  === */;
    //#region
	// it initializ audio player
	const init = () => {
		loadTrack(0);
	};
    //#endregion


	/* ===  Controls  === */;
    //#region
    
	const togglePlayPause = () => {
        if (audioElement.paused) {
            audioElement.play();
		} else audioElement.pause();
	};
    //#endregion

	init();

	return togglePlayPause;
};
