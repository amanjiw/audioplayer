import { useRef, useState, useEffect } from "react";
import { createAudioPlayer } from "./Audioplayer";
import { Controls, PlayerState, Playlist, intialPlayerState } from "./types";

interface Audioplayer extends Controls {
	playerState: PlayerState;
}

const useAudioPlayer: (playlist: Playlist) => Audioplayer = (
	playlist: Playlist
) => {
	const [playerState, setPlayerState] =
		useState<PlayerState>(intialPlayerState);
	const playerRef = useRef<Controls | null>(null);

	useEffect(() => {
		const newplayer = createAudioPlayer(playlist, setPlayerState);
		playerRef.current = newplayer;

		return () => {
			newplayer.cleanup();
		};
	}, [playlist]);

	const togglePlayPause = () => playerRef?.current?.togglePlayPause();
	const playNextTrack = () => playerRef?.current?.playNextTrack();
	const playPreviousTrack = () => playerRef?.current?.playPreviousTrack();
	const cleanup = () => playerRef?.current?.cleanup();
	const toggleRepeat = () => playerRef?.current?.toggleRepeat();

	return {
		playerState,
		togglePlayPause,
		playNextTrack,
		playPreviousTrack,
		cleanup,
		toggleRepeat,
	};
};

export default useAudioPlayer;
