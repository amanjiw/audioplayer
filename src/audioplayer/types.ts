/  === Playlist & Track === /;

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
