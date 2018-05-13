import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { OAuthToken } from "@app/core/oauth-token";

const credentialsKey = "authentication";

export class AuthTokenInterceptor implements HttpInterceptor {

  private authCredentials: OAuthToken | null;

  private getSavedCredentials() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    this.authCredentials = savedCredentials ? JSON.parse(savedCredentials) : savedCredentials;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    this.getSavedCredentials();
    if (req.url.includes("oauth") || !this.authCredentials) {
      return next.handle(req);
    } else {
      const authReq = req.clone({
        setHeaders: {Authorization: `Bearer ${this.authCredentials.access_token}`}
      });
      return next.handle(authReq);
    }
  }
}
