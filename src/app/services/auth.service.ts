import { Injectable } from "@angular/core";
import { auth } from "firebase/app";
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }
  googleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  AuthLogin(provider) {
    return this.afAuth.auth
      .signInWithRedirect(provider)
      .then(result => {
        console.log("You have been successfully logged in!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
