import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@app/auth/core/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-head-nav-account",
  templateUrl: "./head-nav-account.component.html",
  styleUrls: ["./head-nav-account.component.css"]
})
export class HeadNavAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    window.location.href = "/";
  }
}
