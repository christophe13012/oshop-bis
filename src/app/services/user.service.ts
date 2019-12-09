import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}
  async saveUser(user: firebase.User) {
    const userRef = this.db.object("/users/" + user.uid);
    await userRef.update({ name: user.displayName, email: user.email });
  }
  getUser(uid: string): Observable<any> {
    return this.db.object("/users/" + uid).valueChanges();
  }
}
