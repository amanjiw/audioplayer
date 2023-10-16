import { Controls, PlaybackState, PlayerState, Playlist } from "./types";

export const createAudioPlayer: (
	playlist: Playlist,
	onStateChange: (state: PlayerState) => void
) => Controls = (
	playlist: Playlist,
	onStateChange: (state: PlayerState) => void
) => {
	let currentTrackIndex = 0;
	let repeat = false;
	const audioElement: HTMLAudioElement = new Audio();

	/* ===  Player state  === */ //
	const emitCurrentPlayerState: () => void = () => {
		const state = computeCurrentPlayerState();
		onStateChange(state);
	};

	const computeCurrentPlayerState: () => PlayerState = () => {
		return {
			playbackState: getPlayebackState(),
			repeat,
		};
	};

	const getPlayebackState: () => PlaybackState = () => {
		return audioElement.paused ? "PAUSED" : "PLAYING";
	};

	/* ===  Event Listener  === */ //

	const onCurrentTrackEnded = () => {
		if (repeat) replayCurrentTrack();
		else playNextTrack();
	};

	const setupAudioElementListeners = () => {
		audioElement.addEventListener("playing", emitCurrentPlayerState);
		audioElement.addEventListener("pause", emitCurrentPlayerState);
		audioElement.addEventListener("ended", onCurrentTrackEnded);
	};

	const removeAudioElement = () => {
		audioElement.removeEventListener("playing", emitCurrentPlayerState);
		audioElement.removeEventListener("pause", emitCurrentPlayerState);
		audioElement.addEventListener("ended", onCurrentTrackEnded);
	};

	/* ===  Track handling  === */ //
	const loadTrack = (index: number) => {
		audioElement.src = playlist[index].audioSrc;
		audioElement.load();
		currentTrackIndex = index;
	};

	const replayCurrentTrack = () => {
		audioElement.currentTime = 0;
		audioElement.play();
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

	const toggleRepeat = () => {
		repeat = !repeat;
		emitCurrentPlayerState();
	};

	const togglePlayPause = () => {
		if (audioElement.paused) {
			audioElement.play();
		} else audioElement.pause();
	};

	const playNextTrack = () => {
		const nextTrackIndex = currentTrackIndex + 1;
		loadTrack(nextTrackIndex);
		audioElement.play();
	};
	const playPreviousTrack = () => {
		const previousTrackIndex = currentTrackIndex - 1;
		loadTrack(previousTrackIndex);
		audioElement.play();
	};

	init();

	return {
		togglePlayPause,
		playNextTrack,
		playPreviousTrack,
		cleanup,
		toggleRepeat,
	};
};
