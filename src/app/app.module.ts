import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "@app/core/core.module";
import { AuthTokenInterceptor } from "@app/auth/core/auth-token-interceptor";
import { CompanyModule } from "@app/company/company.module";
import { FormsModule } from "@angular/forms";
import { LayoutModule } from "@app/layout/layout.module";
import { LandingModule } from "@app/landing/landing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    LandingModule,
    AuthModule,
    CompanyModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
