import React, { useRef } from "react";
import Controls from "./Controls";
import Progressbar from "./Progressbar";
import SongInfo from "./SongInfo";
import { createAudioPlayer } from "../audioplayer/Audioplayer";
import playlist from "../playlist/playlist";

const AudioPlayer = () => {
	const togglePlayPauseRef = useRef(createAudioPlayer(playlist));

	return (
		<div className="flex flex-col items-center ">
			<SongInfo />
			<Progressbar />
			<Controls onPlayClick={togglePlayPauseRef.current} />
		</div>
	);
};

export default React.memo(AudioPlayer);
