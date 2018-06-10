import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@app/auth/core/authentication.service";

@Component({
  selector: "app-head-nav-account",
  templateUrl: "./head-nav-account.component.html",
  styleUrls: ["./head-nav-account.component.css"]
})
export class HeadNavAccountComponent implements OnInit {

  constructor(
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
