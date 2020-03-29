import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;

    this.authService.registerUser(email, pass);

  }
}
