/*  === Playlist & Track === */
//

export type Playlist = Array<Track>;

export type Track = {
	audioSrc: string;
	metadata: TrackMetadata;
};

export type TrackMetadata = {
	artist: string;
	title: string;
	coverArtSrc: string;
};

/*  === PlayerState === */
//

export type PlayerState = {
	playbackState: PlaybackState;
	repeat: boolean;
	shuffle: boolean;
};

export type PlaybackState = "PLAYING" | "PAUSED";

export const intialPlayerState: PlayerState = {
	playbackState: "PAUSED",
	repeat: false,
	shuffle: false,
};

/*  === Controls === */
//

export type Controls = {
	togglePlayPause: () => void;
	playNextTrack: () => void;
	playPreviousTrack: () => void;
	cleanup: () => void;
	toggleRepeat: () => void;
	toggleShuffle: () => void;
};
