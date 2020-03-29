import {Component, EventEmitter, OnInit} from '@angular/core';
import {Stavka} from "./stavka.model";
import {StavkeService} from "./stavke.service";
import {forEach} from "@angular-devkit/schematics";
import {ShoppingCart} from "./shopping-cart.model";
import {Router} from "@angular/router";
import {IonItemSliding} from "@ionic/angular";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss']
})
export class ShoppingCartPage implements OnInit {
  mojeStavke : Stavka[];
private sum: number;
  shopCart : ShoppingCart;
  shopDogadjaj = new EventEmitter<ShoppingCart>();

  constructor(private stavkeService : StavkeService, private router: Router) {

  }

  ngOnInit() {
    this.mojeStavke = this.stavkeService.getStavke();
    const ukupno = this.ukupnaSuma();
    this.stavkeService.stavkePromena.
    subscribe((stavke : Stavka[]) => {
        this.mojeStavke = stavke;
        // if(this.shopCart == null) {
        //   this.shopCart = new ShoppingCart(stavke, ukupno);
        // }else{
        //   this.shopCart.stavke = this.mojeStavke;
        //   this.shopCart.ukupno = this.ukupnaSuma();
        // }


      }
    );
  }
  
  ukupnaSuma() {
    this.sum = 0;
    for(let s of this.mojeStavke) {
      this.sum += s.iznos;
    }
    return this.sum;
  }

  poruci() {
    const stavke = this.mojeStavke;
    const uk = this.ukupnaSuma();
    const cart = new ShoppingCart(this.mojeStavke, uk);
    this.shopDogadjaj.emit(cart);
    this.router.navigate(['/orders/order-new']);
  }

  delete(stavka: Stavka, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.stavkeService.izbrisiStavku(stavka);
    //this.router.navigate(['/shopping-cart']);
  }

  edit(stavka: Stavka, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'shopping-cart', 'edit', stavka.rb]);

    //this.router.navigate(['/shopping-cart']);
  }
}
