import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AlbumiPage} from "./albumi.page";
import {AlbumDetailPage} from "./album-detail/album-detail.page";

const routes: Routes = [
  {
    path: '',
    component: AlbumiPage
  },
  {
     path: ':albumID',
     loadChildren: './album-detail/album-detail.module#AlbumDetailPageModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumiRoutingModule {}
