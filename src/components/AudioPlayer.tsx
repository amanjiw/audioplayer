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
	} = useAudioPlayer(playlist);

	return (
		<div className="flex flex-col items-center ">
			<SongInfo />
			<Progressbar />
			<Controls
				onPlayClick={togglePlayPause}
				onNextClick={playNextTrack}
				onPrevClick={playPreviousTrack}
				isPlaying={playerState.playbackState === "PLAYING"}
			/>
		</div>
	);
};

export default React.memo(AudioPlayer);
