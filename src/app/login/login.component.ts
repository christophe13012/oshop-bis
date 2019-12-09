import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user) this.router.navigate(["/"]);
    });
  }
  onLogin() {
    this.authService.googleAuth().then(value => console.log(value));
  }

  getInfos() {
    console.log("test");
    firebase.auth().onAuthStateChanged(user => console.log(user));
  }
}
