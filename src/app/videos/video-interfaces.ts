interface Cast {
  name: string;
  id: number;
  characters: Array<string>;
}

interface Links {
  download: string;
}

interface ThumbnailsVideosList {
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
  thumbnails: ThumbnailsVideosList;
  synopsis: string;
  abridged_cast: Array<Cast>;
  links: Links;
}

interface ThumbnailsVideoCategories {
  '270x140': string;
  '295x144': string;
  '300x300': string;
  '341x307': string;
}

export interface VideoCategories {
  id: number;
  name: string;
  thumbnails: ThumbnailsVideoCategories;
  sequence: number;
}
