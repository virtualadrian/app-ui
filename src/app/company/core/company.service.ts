import { Injectable } from "@angular/core";
import { EnvironmentService } from "@app/core/environment.service";
import { HttpClient } from "@angular/common/http";


const routes = {
  getCompanies: () => EnvironmentService.getEndpointWithEnvironment("/company")
};

@Injectable()
export class CompanyService {

  constructor(private apiClient: HttpClient) {
  }

  getCompanies() {
    return this.apiClient.get(routes.getCompanies()).subscribe(value => {
      console.dir(value);
    });
  }
}
