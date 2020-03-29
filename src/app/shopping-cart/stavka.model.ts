import {Album} from "../albumi/album.model";

export class Stavka {
  constructor(
    public rb: number,
    public album: Album,
    public kolicina: number,
    public iznos: number
  ) {}
}
