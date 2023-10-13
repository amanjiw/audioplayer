import { PlaybackState, PlayerState, Playlist } from "./types";

export const createAudioPlayer = (
	playlist: Playlist,
	onStateChange: (state: PlayerState) => void
) => {
	let currentTrackIndex = 0;
	const audioElement: HTMLAudioElement = new Audio();

	/* ===  Player state  === */ //
	const emitCurrentPlayerState: () => void = () => {
		const state = computeCurrentPlayerState();

		onStateChange(state);
	};
	const computeCurrentPlayerState: () => PlayerState = () => {
		return {
			playbackState: getPlayebackState(),
		};
	};

	const getPlayebackState: () => PlaybackState = () => {
		return audioElement.paused ? "PAUSED" : "PLAYING";
	};

	/* ===  Event Listener  === */ //
	const setupAudioElementListeners = () => {
		audioElement.addEventListener("playing", emitCurrentPlayerState);
		audioElement.addEventListener("pause", emitCurrentPlayerState);
	};

	/* ===  Track handling  === */ //
	const loadTrack = (index: number) => {
		audioElement.src = playlist[index].audioSrc;
		audioElement.load();
		currentTrackIndex = index;
	};

	/* ===  Init  === */
	// it initializ audio player
	const init = () => {
		setupAudioElementListeners();
		loadTrack(0);
	};

	/* ===  Controls  === */
	//
	const togglePlayPause = () => {
		if (audioElement.paused) {
			audioElement.play();
		} else audioElement.pause();
	};

	init();

	return togglePlayPause;
};
