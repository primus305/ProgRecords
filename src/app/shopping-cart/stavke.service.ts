import {Stavka} from "./stavka.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Album} from "../albumi/album.model";

@Injectable({
  providedIn: 'root'
})
export class StavkeService {
  stavkePromena = new EventEmitter<Stavka[]>();
  private stavke : Stavka[] = [];

  constructor() {
    this.stavke = new Array();
  }

  setStavke(stavke: Stavka[]) {
    this.stavke = stavke;
    this.stavkePromena.emit(this.stavke.slice());
  }

  getStavke() {
    return this.stavke.slice();
  }

  dodajStavku(stavka: Stavka) {
    this.stavke.push(stavka);
    this.stavkePromena.emit(this.stavke.slice());
  }

  izbrisiStavku(stavka: Stavka) {
    this.stavke.forEach( (item, index) => {
      if(item === stavka) this.stavke.splice(index,1);
    });
    this.stavkePromena.emit(this.stavke.slice());
  }

  getStavka(rb: number) {
    return {...this.stavke.find(s => s.rb === rb)};
  }

  izmeniStavku(stavka: Stavka) {
    this.stavke.find(item => item.rb == stavka.rb).kolicina = stavka.kolicina;
    this.stavke.find(item => item.rb == stavka.rb).iznos = stavka.kolicina * stavka.album.cena;
    this.stavkePromena.emit(this.stavke.slice());
  }
}
