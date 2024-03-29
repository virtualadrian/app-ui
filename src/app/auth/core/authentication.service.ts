import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EnvironmentService } from "@app/core/environment.service";
import { LoginModel } from "@app/auth/model/login-model";
import { OAuthToken } from "@app/auth/model/oauth-token";
import { JwtHelperService } from "@auth0/angular-jwt";
const credentialsKey = "authentication";

const routes = {
  getAuthToken: () => EnvironmentService.getEndpoint("/oauth/token")
};

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json",
    "Authorization": "Basic " + EnvironmentService.getClientAuthHeader()
  })
};

@Injectable()
export class AuthenticationService {
  private jwtService = new JwtHelperService();
  private authCredentials: OAuthToken | null;

  constructor(
    private apiClient: HttpClient
    ) { }

  static getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    return formBody.join("&");
  }

  getAuthCredentials(): OAuthToken {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    this.authCredentials = savedCredentials ? JSON.parse(savedCredentials) : savedCredentials;
    return this.authCredentials;
  }

  login(loginModel: LoginModel): Promise<void> {
    const data: any = {
      "grant_type": "password",
      "username": loginModel.username,
      "password": loginModel.password,
      "client_id": "fooClientIdPassword"
    };

    return this.apiClient
      .post<OAuthToken>(routes.getAuthToken(), AuthenticationService.getFormUrlEncoded(data), httpOptions)
      .toPromise()
      .then(token => {
        localStorage.setItem(credentialsKey, JSON.stringify(token));
      });
  }

  isAuthenticated(): boolean {
    const authToken = this.getAuthCredentials();
    return  authToken ? !this.jwtService.isTokenExpired(authToken.access_token) : false;
  }

  logout() {
    sessionStorage.removeItem(credentialsKey);
    localStorage.removeItem(credentialsKey);
  }
}
