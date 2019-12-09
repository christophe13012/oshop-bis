import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Oshop";
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCzG6WSMOK7FGlYLxi9H8_BdcIb-5E-E88",
      authDomain: "oshop-bc721.firebaseapp.com",
      databaseURL: "https://oshop-bc721.firebaseio.com",
      projectId: "oshop-bc721",
      storageBucket: "oshop-bc721.appspot.com",
      messagingSenderId: "1026817276939",
      appId: "1:1026817276939:web:3a71080f174c3d96e4db0e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
