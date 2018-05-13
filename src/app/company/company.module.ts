import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyService } from "@app/company/core/company.service";
import { CompanyListComponent } from "./company-list/company-list.component";

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyListComponent],
  providers: [CompanyService]
})
export class CompanyModule { }
