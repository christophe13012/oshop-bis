import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$.map(user => {
      if (user) return true;
      this.router.navigate(["/login"]);
      return false;
    });
  }
}
