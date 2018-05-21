interface Links {
  download: string;
}

interface ThumbnailsSongsList {
  '54x54': string;
  '40x40': string;
}

export interface SongsList {
  id: string;
  title: string;
  album: string;
  duration: number;
  categories: Array<string>;
  thumbnails: ThumbnailsSongsList;
  links: Links;
}

interface ThumbnailsSongCategories {
  '270x140': string;
  '295x144': string;
  '300x300': string;
  '341x307': string;
}

export interface SongCategories {
  id: string;
  name: string;
  thumbnails: ThumbnailsSongCategories;
  sequence: number;
}
