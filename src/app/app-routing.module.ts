import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "@app/landing/landing-page/landing-page.component";

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: "**", redirectTo: "", pathMatch: "full", component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
