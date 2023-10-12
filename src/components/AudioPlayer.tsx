import React from "react";
import Controls from "./Controls";
import Progressbar from "./Progressbar";

const AudioPlayer = () => {
	return (
		<div className="flex flex-col items-center ">
			<Progressbar />
			<Controls />
		</div>
	);
};

export default React.memo(AudioPlayer);
