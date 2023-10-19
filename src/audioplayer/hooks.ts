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

    
	const playNextTrack = () => playerRef?.current?.playNextTrack();
	const playPreviousTrack = () => playerRef?.current?.playPreviousTrack();
	const cleanup = () => playerRef?.current?.cleanup();
	const togglePlayPause = () => playerRef?.current?.togglePlayPause();
	const toggleRepeat = () => playerRef?.current?.toggleRepeat();
	const toggleShuffle = () => playerRef.current?.toggleShuffle();

	return {
		playerState,
		togglePlayPause,
		playNextTrack,
		playPreviousTrack,
		cleanup,
		toggleRepeat,
		toggleShuffle,
	};
};

export default useAudioPlayer;
