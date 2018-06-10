import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@app/auth/core/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public isLoggedInSession: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.isLoggedInSession = authenticationService.isAuthenticated();
  }

  ngOnInit() {}
}
