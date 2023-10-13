import React, { useRef, useState } from "react";
import Controls from "./Controls";
import Progressbar from "./Progressbar";
import SongInfo from "./SongInfo";
import { createAudioPlayer } from "../audioplayer/Audioplayer";
import playlist from "../playlist/playlist";
import { PlayerState, intialPlayerState } from "../audioplayer/types";

const AudioPlayer = () => {
	const [playerState, setPlayerState] =
		useState<PlayerState>(intialPlayerState);
	const togglePlayPauseRef = useRef(
		createAudioPlayer(playlist, setPlayerState)
	);

	return (
		<div className="flex flex-col items-center ">
			<SongInfo />
			<Progressbar />
			<Controls
				onPlayClick={togglePlayPauseRef.current}
				isPlaying={playerState.playbackState === "PLAYING"}
			/>
		</div>
	);
};

export default React.memo(AudioPlayer);
