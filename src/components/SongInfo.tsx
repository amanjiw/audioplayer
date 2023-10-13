import React from "react";

import coverArt from "../playlist/cover-art/1.jpg";

const SongInfo = ({}) => {
	return (
		<div className="flex flex-col justify-center items-centermb-10">
			<img
				className=" drop-shadow-lg rounded-sm mb-10  "
				width={180}
				height={180}
				src={coverArt}
				alt=""
			/>
			<span className="text-2xl drop-shadow-lg text-primary ">Title</span>
			<span className="text-base drop-shadow-lg text-primary">
				Artist
			</span>
		</div>
	);
};

export default React.memo(SongInfo);
