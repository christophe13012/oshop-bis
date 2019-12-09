import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root"
})
export class AdminAuthService {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$.switchMap(user => {
      return this.userService.getUser(user.uid).map(userdb => {
        if (userdb.isAdmin) return true;
        this.router.navigate(["/"]);
        return false;
      });
    });
  }
}
