import {EventEmitter, Injectable} from "@angular/core";
import {Album} from "./album.model";
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs";
import "rxjs/Rx";


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumPromena = new EventEmitter<Album[]>();


  private _albums : Album[] = [];

  get albums() {
    return [...this._albums];
  }

  set albums(value: Album[]) {
    this._albums = value;
  }

  setAlbums(albumi: Album[]) {
    this._albums = albumi;
    this.albumPromena.next(this._albums);
  }

  constructor() {}

  getAlbum(id: number) {
    return {...this._albums.find(a => a.id === id)};
  }

  // getFilteredAlbums(searchText : string) : Observable<Album[]> {
  //   return Observable.create(observable => {
  //     this.albums.subscribe(allAlbums => {
  //       let filteredAlbums = allAlbums.filter()
  //     });
  //   });
  // }
}
