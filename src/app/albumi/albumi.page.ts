import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {Album} from "./album.model";
import {AlbumsService} from "./albumi.service";
import {LoadingController, MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-albumi',
  templateUrl: './albumi.page.html',
  styleUrls: ['./albumi.page.scss'],
})
export class AlbumiPage implements OnInit {

  ucitaniAlbumi : Album[];

  constructor(private alService: AlbumsService,
              private menuCtrl: MenuController,
              private storage: DataStorageService) {

    this.storage.getAlbums();
    this.ucitaniAlbumi = this.alService.albums;

    this.alService.albumPromena.
    subscribe((albumi : Album[]) => {
        this.ucitaniAlbumi = albumi;
      }
    );
  }

  ngOnInit() {


  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  getStoredAlbums() {
    //this.storage.getAlbums();
  }

  store() {
    this.storage.storeAlbums().subscribe(
      (response : Response) => {
        console.log(response);
      }
    );
  }
}
