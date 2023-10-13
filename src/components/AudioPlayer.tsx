import React from "react";
import Controls from "./Controls";
import Progressbar from "./Progressbar";
import SongInfo from "./SongInfo";

const AudioPlayer = () => {
	return (
		<div className="flex flex-col items-center ">
			<SongInfo />
			<Progressbar />
			<Controls />
		</div>
	);
};

export default React.memo(AudioPlayer);
