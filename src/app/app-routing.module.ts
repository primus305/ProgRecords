import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth-guard.service";
import {ShoppingCartPage} from "./shopping-cart/shopping-cart.page";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'albumi', loadChildren: './albumi/albumi.module#AlbumiPageModule', canActivate: [AuthGuard] },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule', canActivate: [AuthGuard] },
  { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartPageModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
