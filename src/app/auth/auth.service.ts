import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {EventEmitter, Injectable} from "@angular/core";
import {AlertController, LoadingController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string;
  authDogadjaj = new EventEmitter<string>();
  isLoading = false;

  constructor(private router: Router, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/login']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {

          this.router.navigate(['/albumi']);

          firebase.auth().currentUser.getIdToken()
            .then(
              (token : string) => this.token = token
            )
        }
      )
      .catch(
        error => {
          this.alertCtrl
            .create({
              message: error.toString(),
              buttons: ['OK'] })
            .then(alertEl => {
              alertEl.present();
            });
          console.log(error);
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/login']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token : string) => this.token = token
      );

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
