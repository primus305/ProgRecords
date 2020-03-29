import { Component, OnInit } from '@angular/core';
import {Album} from "../albumi/album.model";
import {AlbumsService} from "../albumi/albumi.service";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  sviAlbumi : Album[];

  constructor(private alService: AlbumsService,
              private menuCtrl: MenuController) {
    this.initializeAlbums();
  }

  ngOnInit() {

  }

  initializeAlbums() {
    this.sviAlbumi = this.alService.albums;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  search(event) {
    this.initializeAlbums();

    // set val to the value of the searchbar
    const val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.sviAlbumi = this.sviAlbumi.filter((item) => {
        return (item.naziv.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.izvodjac.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
