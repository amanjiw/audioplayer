import { Controls, PlaybackState, PlayerState, Playlist } from "./types";

export const createAudioPlayer: (
	playlist: Playlist,
	onStateChange: (state: PlayerState) => void
) => Controls = (
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
		audioElement.addEventListener("play", emitCurrentPlayerState);
		audioElement.addEventListener("pause", emitCurrentPlayerState);
	};

	const removeAudioElement = () => {
		audioElement.removeEventListener("play", emitCurrentPlayerState);
		audioElement.removeEventListener("pause", emitCurrentPlayerState);
	};

	/* ===  Track handling  === */ //
	const loadTrack = (index: number) => {
		audioElement.src = playlist[index].audioSrc;
		audioElement.load();
		currentTrackIndex = index;
	};

	/* ===  Init and Cleanup  === */
	// it initializ audio player
	const init = () => {
		setupAudioElementListeners();
		loadTrack(0);
	};

	const cleanup = () => {
		removeAudioElement();
		audioElement.pause();
	};

	/* ===  Controls  === */
	//
	const togglePlayPause = () => {
		if (audioElement.paused) {
			audioElement.play();
		} else audioElement.pause();
	};

	const playNextTrack = () => {
		const nextTrackIndex = currentTrackIndex + 1;
		loadTrack(nextTrackIndex);
	};
	const playPreviousTrack = () => {
		const previousTrackIndex = currentTrackIndex - 1;
		loadTrack(previousTrackIndex);
	};

	init();

	return { togglePlayPause, playNextTrack, playPreviousTrack, cleanup };
};
