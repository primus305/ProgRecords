import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {StavkeService} from "./shopping-cart/stavke.service";
import {AlbumsService} from "./albumi/albumi.service";
import {DataStorageService} from "./shared/data-storage.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {ShoppingCartPageModule} from "./shopping-cart/shopping-cart.module";
import {OrdersService} from "./orders/orders.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ShoppingCartPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    StavkeService,
    HttpClientModule,
    AlbumsService,
    DataStorageService,
    AuthService,
    AuthGuard,
    OrdersService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
