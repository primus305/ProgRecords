export class Album {
  constructor(
    public id: number,
    public naziv: string,
    public izvodjac: string,
    public zanr: string,
    public godina: number,
    public cena: number,
    public slika: string
  ) {}
}
