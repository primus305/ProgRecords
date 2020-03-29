import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../order.model";
import {OrdersService} from "../orders.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {


  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private ordersService: OrdersService) { }

  ngOnInit() {
  }

}
