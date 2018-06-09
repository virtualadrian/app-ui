import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LandingRegisterComponent } from "./landing-register/landing-register.component";
import { LandingFeaturesComponent } from "./landing-features/landing-features.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, LandingRegisterComponent, LandingFeaturesComponent],
  exports: [LandingPageComponent]
})
export class LandingModule { }
