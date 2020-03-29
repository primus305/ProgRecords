import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumsService} from "../../albumi/albumi.service";
import {StavkeService} from "../stavke.service";
import {Stavka} from "../stavka.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  stavka: Stavka;
  kolicina: number;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private stavkeService: StavkeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/albumi');
        return;
      }
      this.stavka = this.stavkeService.getStavka(+paramMap.get('id'));
    });
  }


  EditStavka() {
    this.stavkeService.izmeniStavku(this.stavka);
    this.router.navigate(['/shopping-cart']);
  }
}
