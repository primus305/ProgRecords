import {ShoppingCart} from "../shopping-cart/shopping-cart.model";


export class Order {
  constructor(
    public id: number,
    public shopCart: ShoppingCart,
    public korisnik: string,
    public drzava: string,
    public grad: string,
    public adresa: string,
    public datum: Date,
    public expanded: boolean
  ) {}

}


