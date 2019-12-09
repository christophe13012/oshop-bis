import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  appUser: string = "Username";
  isAdmin: boolean = false;
  constructor(
    private route: Router,
    private authservice: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.authservice.user$.subscribe(user => {
      if (user) {
        this.appUser = user.displayName;
        this.userService.saveUser(user);
      }
      this.userService.getUser(user.uid).subscribe(userdb => {
        if (userdb) this.isAdmin = userdb.isAdmin;
      });
    });
  }

  logout() {
    this.authservice.logout();
    this.appUser = "Username";
    this.route.navigate([""]);
  }
}
