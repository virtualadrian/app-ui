import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "@app/auth/core/auth-guard.service";
import { CompanyListComponent } from "@app/company/company-list/company-list.component";

const routes: Routes = [
  { path: "company", component: CompanyListComponent, canActivate: [AuthGuardService] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
