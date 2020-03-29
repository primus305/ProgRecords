import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumiPage } from './albumi.page';
import {AlbumiRoutingModule} from "./albumi-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumiRoutingModule
  ],
  declarations: [AlbumiPage]
})
export class AlbumiPageModule {}
