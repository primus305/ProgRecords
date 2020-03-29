import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Order} from "./order.model";
import {OrdersService} from "./orders.service";
import {DataStorageService} from "../shared/data-storage.service";

import * as firebase from 'firebase';
import {LoadingController} from "@ionic/angular";
import {OrderNewPage} from "./order-new/order-new.page";
import {Observable} from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit, OnChanges {
  loadOrders: Order[];
  drugi: Order[] = [];
  kor : string;
  isLoading = false;
  itemExpanded = true;
  itemExpandHeight : number = 200;
  constructor(private ordersService: OrdersService,
              private storage: DataStorageService,
              private loadingCtrl: LoadingController) {
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Loading...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
        }, 2000);
      });

    Observable.interval(20000).takeWhile(() => true).subscribe(() => {
      this.storage.getOrders();
      this.loadOrders = this.ordersService.getOrders();
    });
  }

  ngOnInit() {

    this.storage.getOrders();
    this.loadOrders = this.ordersService.getOrders();
    this.ordersService.orderPromena.
    subscribe((orders : Order[]) => {
        this.loadOrders = orders;
      }
    );
    //
    this.kor = firebase.auth().currentUser.email;
    // for(let o of this.loadOrders) {
    //   if(o.korisnik === kor) {
    //     this.drugi.push(o);
    //   }
    // }
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  toggle(order) {
    order.expanded = !order.expanded;
  }
}
