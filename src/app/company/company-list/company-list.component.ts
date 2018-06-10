import { Component, OnInit } from "@angular/core";
import { CompanyService } from "@app/company/core/company.service";
import { ResultSet } from "@app/core/model/result-set";
import { CompanyModel } from "@app/company/model/company-model";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.css"]
})
export class CompanyListComponent implements OnInit {

  public companyList: ResultSet<CompanyModel> = new ResultSet<CompanyModel>();

  constructor(private companyService: CompanyService) {}

  private getCompanyList() {
    this.companyService.getCompanies().subscribe(result => {
      this.companyList = result;
    });
  }

  ngOnInit() {
    this.getCompanyList();
  }

}
