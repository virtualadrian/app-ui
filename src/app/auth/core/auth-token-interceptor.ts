import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { OAuthToken } from "app/auth/model/oauth-token";
const credentialsKey = "authentication";

export class AuthTokenInterceptor implements HttpInterceptor {

  private authCredentials: OAuthToken | null;

  private getSavedCredentials() {
    this.authCredentials = this.getAuthCredentials();
  }

  private getAuthCredentials(): OAuthToken {
    // get saved credentials from local storage
    const savedCredentials = localStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);

    // parse creds if they were found
    this.authCredentials = savedCredentials ? JSON.parse(savedCredentials) : savedCredentials;

    return this.authCredentials;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    // refresh credentials from localStorage
    this.getSavedCredentials();
    // skip for oauth calls or if we don't have the creds
    if (req.url.includes("oauth") || !this.authCredentials) { return next.handle(req); }
    // clone the request object, and update the headers adding the auth token
    const authReq = req.clone({
      setHeaders: {Authorization: `Bearer ${this.authCredentials.access_token}`}
    });
    // allow the request chain to continue
    return next.handle(authReq);
  }
}
