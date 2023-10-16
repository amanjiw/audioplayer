import React from "react";
import Controls from "./Controls";
import Progressbar from "./Progressbar";
import SongInfo from "./SongInfo";

import useAudioPlayer from "../audioplayer/hooks";
import playlist from "../playlist/playlist";

const AudioPlayer = () => {
	const {
		cleanup,
		playNextTrack,
		playPreviousTrack,
		playerState,
		togglePlayPause,
		toggleRepeat,
	} = useAudioPlayer(playlist);

	const { playbackState, repeat } = playerState;

	return (
		<div className="flex flex-col items-center ">
			<SongInfo />
			<Progressbar />
			<Controls
				isPlaying={playbackState === "PLAYING"}
				onPrevClick={playPreviousTrack}
				onPlayClick={togglePlayPause}
				onRepeatClick={toggleRepeat}
				onNextClick={playNextTrack}
				repeat={repeat}
			/>
		</div>
	);
};

export default React.memo(AudioPlayer);
