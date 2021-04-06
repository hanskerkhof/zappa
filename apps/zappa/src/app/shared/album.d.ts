export interface IAlbumSource {
  [key: string]: IAlbum;
}

export interface IAlbum {
  name: string;
  year: number;
  owned: boolean;
  spotifyAlbumId?: string;
  uuid: string;
}
