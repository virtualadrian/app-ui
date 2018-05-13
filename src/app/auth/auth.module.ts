import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthenticationService } from "./core/authentication.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService]
})
export class AuthModule { }
