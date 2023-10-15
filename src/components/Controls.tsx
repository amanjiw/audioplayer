import React from "react";

import PlayBtnIcon from "../assets/icons/ic_play.svg";
import PauseBtnIcon from "../assets/icons/ic_pause.svg";
import NextBtnIcon from "../assets/icons/ic_next.svg";
import PrevBtnIcon from "../assets/icons/ic_prev.svg";
import ShuffleBtnIcon from "../assets/icons/ic_shuffle.svg";
import RepeatBtnIcon from "../assets/icons/ic_repeat.svg";

type ControlsProps = {
	onPlayClick: () => void;
	onPrevClick: () => void;
	onNextClick: () => void;
	isPlaying: boolean;
};

const Controls = ({
	onPlayClick,
	isPlaying,
	onNextClick,
	onPrevClick,
}: ControlsProps) => {
	const onCLick = () => {}; // Not Needed Remove Later

	return (
		<div className="flex flex-row mt-4 ">
			<ImageButton src={ShuffleBtnIcon} onClick={onCLick} />
			<ImageButton src={PrevBtnIcon} onClick={onPrevClick} />
			<ImageButton
				className=" mr-2 ml-2 "
				src={isPlaying ? PauseBtnIcon : PlayBtnIcon}
				onClick={onPlayClick}
			/>
			<ImageButton src={NextBtnIcon} onClick={onNextClick} />
			<ImageButton src={RepeatBtnIcon} onClick={onCLick} />
		</div>
	);
};

export default React.memo(Controls);

type ImageButtonProps = {
	src: string;
	onClick: () => void;
	className?: string;
};

const ImageButton = ({ onClick, src, className }: ImageButtonProps) => {
	const buttonSize = 65;

	return (
		<button onClick={onClick}>
			<img
				src={src}
				alt=""
				width={buttonSize}
				height={buttonSize}
				className={`${className ?? ""} drop-shadow-lg`}
			/>
		</button>
	);
};
