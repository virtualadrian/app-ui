import { Injectable } from "@angular/core";
import { EnvironmentService } from "@app/core/environment.service";
import { HttpClient } from "@angular/common/http";
import { ResultSet } from "@app/core/model/result-set";
import { CompanyModel } from "@app/company/model/company-model";


const routes = {
  getCompanies: () => EnvironmentService.getEndpoint("/company")
};

@Injectable()
export class CompanyService {

  constructor(private apiClient: HttpClient) {
  }

  getCompanies() {
    return this.apiClient.get<ResultSet<CompanyModel>>(routes.getCompanies());
  }
}
