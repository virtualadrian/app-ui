import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@app/auth/core/authentication.service";
import { LoginModel } from "@app/auth/model/login-model";
import { CompanyService } from "@app/company/core/company.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  protected getLoginText = "Log In";
  protected getLogoutText = "Log Out";
  protected getCompaniesText = "Get Companies";

  constructor(
    private authService: AuthenticationService,
    private companyService: CompanyService) { }

  ngOnInit() {
  }

  login() {
    const login: LoginModel = new LoginModel();
    login.username = "adrian9";
    login.password = "adrian1";
    login.remember = false;

    this.authService.login(login);
  }

  logout() {
    this.authService.logout();
  }

  getCompanies() {
    this.companyService.getCompanies();
  }
}
