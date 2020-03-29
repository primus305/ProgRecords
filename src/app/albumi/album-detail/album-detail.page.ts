import { Component, OnInit } from '@angular/core';
import {Album} from "../album.model";
import {AlertController, NavController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumsService} from "../albumi.service";
import {StavkeService} from "../../shopping-cart/stavke.service";
import {Stavka} from "../../shopping-cart/stavka.model";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.page.html',
  styleUrls: ['./album-detail.page.scss'],
})
export class AlbumDetailPage implements OnInit {

  album: Album;
  kolicina: number;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private stavkeService: StavkeService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('albumID')) {
        this.navCtrl.navigateBack('/albumi');
        return;
      }
      this.album = this.albumsService.getAlbum(+paramMap.get('albumID'));
    });
  }

  public DodajUKorpu() {
    const redniBr = this.stavkeService.getStavke().length + 1;
    const al = this.album;
    const kol = this.kolicina;
    const iznos = kol*al.cena;
    const s = new Stavka(redniBr, al, kol, iznos);
    let jeste : boolean = false;
    for(let sta of this.stavkeService.getStavke()){
      if(sta.album.naziv === al.naziv) {
        jeste = true;
      }
    }

    if(jeste) {
      this.alertCtrl
        .create({
          message: 'You already put this album on your cart, go to shopping-cart tab and edit item.',
          buttons: ['OK'] })
        .then(alertEl => {
          alertEl.present();
        });
    }else{
      this.stavkeService.dodajStavku(s);
      this.router.navigate(['/shopping-cart']);
    }


  }

}
