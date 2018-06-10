import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LandingRegisterComponent } from "./landing-register/landing-register.component";
import { LandingFeaturesComponent } from "./landing-features/landing-features.component";
import { LayoutModule } from "@app/layout/layout.module";
import { AuthModule } from "@app/auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    AuthModule
  ],
  declarations: [LandingPageComponent, LandingRegisterComponent, LandingFeaturesComponent],
  exports: [LandingPageComponent]
})
export class LandingModule { }
