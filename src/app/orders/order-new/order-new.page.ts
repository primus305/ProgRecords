import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Stavka} from "../../shopping-cart/stavka.model";
import {ShoppingCart} from "../../shopping-cart/shopping-cart.model";
import {ShoppingCartPage} from "../../shopping-cart/shopping-cart.page";
import {AuthService} from "../../auth/auth.service";
import {Order} from "../order.model";
import {OrdersService} from "../orders.service";
import {Router} from "@angular/router";
import {DataStorageService} from "../../shared/data-storage.service";

import * as firebase from 'firebase';
import {StavkeService} from "../../shopping-cart/stavke.service";

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.page.html',
  styleUrls: ['./order-new.page.scss'],
  providers: [ShoppingCartPage]
})
export class OrderNewPage implements OnInit {

  private sum: number;
  yourCart : ShoppingCart;
  korisnik : string;

  constructor(private shopPage: ShoppingCartPage,
              private authService: AuthService,
              private ordersService: OrdersService,
              private router: Router,
              private storage: DataStorageService,
              private stavkeService: StavkeService) { }

  ngOnInit() {
  }

  potvrdiPorudzbinu(form: NgForm) {
    this.trenutniKorisnik();
    // this.shopPage.shopDogadjaj.
    // subscribe((cart : ShoppingCart) => {
    //     this.yourCart = cart;
    //   }
    // );

    const stavke = this.stavkeService.getStavke();
    const ukupno = this.ukupnaSuma(stavke);
    const id = this.ordersService.getOrders().length + 1;
    const sc = new ShoppingCart(stavke, ukupno);
    const kor = this.korisnik;
    const drzava = form.value.drzava;
    const grad = form.value.grad;
    const adresa = form.value.adresa;
    const datum = new Date();
    const o = new Order(id, sc, kor, drzava, grad, adresa, datum, false);

    this.storage.storeOrder(o).subscribe(
      (response : Response) => {
        //
        // this.ordersService.addYourOrder(o);
        console.log(response);
      }
    );
    const stavkeNova : Stavka[] = [];
    this.stavkeService.setStavke(stavkeNova);

    this.router.navigate(['/orders']);
  }

  trenutniKorisnik() {
    // this.authService.authDogadjaj.
    // subscribe((email : string) => {
    //     this.korisnik = email;
    //   }
    // );

    this.korisnik = firebase.auth().currentUser.email;
  }

  ukupnaSuma(stavke: Stavka[]) {
    this.sum = 0;
    for(let s of stavke) {
      this.sum += s.iznos;
    }
    return this.sum;
  }

}
