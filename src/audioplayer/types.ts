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
};

export type PlaybackState = "PLAYING" | "PAUSED";

export const intialPlayerState: PlayerState = {
	playbackState: "PAUSED",
};
