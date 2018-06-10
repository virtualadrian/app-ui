import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "@app/auth/core/authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public authenticationService: AuthenticationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(["/account/login"]);
      return false;
    }
    return true;
  }
}
