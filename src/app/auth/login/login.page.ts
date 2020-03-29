import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;

    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/albumi');
        }, 3000);
      });

    this.authService.loginUser(email, pass);


  }
}
