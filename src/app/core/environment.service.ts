import { Injectable } from "@angular/core";
import { environment } from "@env/environment";

@Injectable()
export class EnvironmentService {

  constructor() { }

  static getEndpointWithEnvironment(relativePath: string): string {
    return environment.serverUrl + relativePath;
  }

}
