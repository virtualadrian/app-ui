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

  public getLoginText = "Log In";
  public getLogoutText = "Log Out";
  public getCompaniesText = "Get Companies";
  public loginModel: LoginModel = new LoginModel();

  constructor(
    private authService: AuthenticationService,
    private companyService: CompanyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginModel);
  }

  logout() {
    this.authService.logout();
  }

  getCompanies() {
    this.companyService.getCompanies();
  }
}
