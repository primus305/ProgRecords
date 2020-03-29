import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShoppingCartPage} from "./shopping-cart.page";

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPage
  },
  {
    path: 'edit/:id',
    loadChildren: './edit/edit.module#EditPageModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}
