import {Injectable} from "@angular/core";

import {AlbumsService} from "../albumi/albumi.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Album} from "../albumi/album.model";
import {Order} from "../orders/order.model";
import {OrdersService} from "../orders/orders.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient,
              private alService: AlbumsService,
              private authService : AuthService,
              private ordersService: OrdersService) {}

  storeAlbums() {
    const token = this.authService.getToken();
    return this.http.put('https://mrprojekat.firebaseio.com/albumi.json?auth=' +token, this.alService.albums);
  }

  getAlbums() {
    const token = this.authService.getToken();
    this.http.get('https://mrprojekat.firebaseio.com/albumi.json?auth=' +token)
      .subscribe(
        (response: Album[]) => {
          console.log(response);
          this.alService.setAlbums(response);
        }
      );
  }

  storeOrder(order: Order) {
    const token = this.authService.getToken();
    return this.http.post('https://mrprojekat.firebaseio.com/porudzbine.json?auth=' +token, order);
  }

  getOrders() {
    const token = this.authService.getToken();
    this.http.get('https://mrprojekat.firebaseio.com/porudzbine.json?auth=' +token)
      .subscribe(
        (response: Order[]) => {
          console.log(response);
          this.ordersService.setOrders(response);
        }
      );
  }
}
