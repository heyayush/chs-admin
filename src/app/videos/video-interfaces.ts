export interface Cast {
  name: string;
  id: number;
  characters: Array<string>;
}

export interface Links {
  download: string;
}

export interface Thumbnails {
  '400x207': string;
  '293x293': string;
  '295x144': string;
  '640x333': string;
  '341x307': string;
}

export interface VideosList {
  id: number;
  title: string;
  categories: Array<string>;
  thumbnails: Thumbnails;
  synopsis: string;
  abridged_cast: Array<Cast>;
  links: Links;
}
