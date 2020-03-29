import {Stavka} from "./stavka.model";

export class ShoppingCart {
  constructor(
    public stavke: Stavka[],
    public ukupno: number
  ) {}


}
