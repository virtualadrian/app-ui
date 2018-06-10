import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthenticationService } from "./core/authentication.service";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { AuthGuardService } from "@app/auth/core/auth-guard.service";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService, AuthGuardService]
})
export class AuthModule { }
