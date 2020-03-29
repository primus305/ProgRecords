import {EventEmitter} from "@angular/core";
import {Order} from "./order.model";
import * as firebase from 'firebase';


export class OrdersService {
  orderPromena = new EventEmitter<Order[]>();

  private _orders : Order[] = [];

  private yourOrders: Order[] = [];

  get orders() {
    return [...this._orders];
  }

  set orders(value: Order[]) {
    this._orders = value;
  }

  setOrders(orders: Order[]) {
    // const kor = firebase.auth().currentUser.email;
    // for(let o of orders) {
    //   if(o.korisnik === kor) {
    //     this._orders.push(o);
    //   }
    // }
    this._orders = orders;
    this.orderPromena.emit(this._orders);
  }

  getOrders() {
    return this._orders;
  }

  addYourOrder(order: Order) {
    this._orders.push(order);
    this.orderPromena.emit(this._orders);
  }

  constructor() {}

  getOrder(id: number) {
    return {...this._orders.find(p => p.id === id)};
  }


}
