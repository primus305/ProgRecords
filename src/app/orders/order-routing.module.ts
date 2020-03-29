import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersPage} from "./orders.page";


const routes: Routes = [
  {
    path: '',
    component: OrdersPage
  },
  {
    path: 'order-new',
    loadChildren: './order-new/order-new.module#OrderNewPageModule'
  },
  {
    path: ':orderID',
    loadChildren: './order-detail/order-detail.module#OrderDetailPageModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
