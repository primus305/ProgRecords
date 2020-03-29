import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdersPage } from './orders.page';
import {OrderRoutingModule} from "./order-routing.module";
import { FilterPipe } from './filter.pipe';
import {ExpandableComponent} from "../expandable/expandable.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderRoutingModule
  ],
  declarations: [OrdersPage, FilterPipe, ExpandableComponent]
})
export class OrdersPageModule {}
