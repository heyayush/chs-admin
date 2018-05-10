export interface Links {
  download: string;
}

export interface Thumbnails {
  '54x54': string;
  '40x40': string;
}

export interface SongsList {
  id: number;
  title: string;
  album: string;
  duration: number;
  categories: Array<string>;
  thumbnails: Thumbnails;
  links: Links;
}
