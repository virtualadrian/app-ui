import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from "@app/company/core/company.service";

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [],
  providers: [CompanyService]
})
export class CompanyModule { }
