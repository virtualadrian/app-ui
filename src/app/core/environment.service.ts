import { Injectable } from "@angular/core";
import { environment } from "@env/environment";

@Injectable()
export class EnvironmentService {

  constructor() { }

  static getEndpointWithEnvironment(relativePath: string): string {
    return environment.serverUrl + relativePath;
  }

  static getClientId(): string {
    return "fooClientIdPassword";
  }

  static getClientSecret(): string {
    return "secret";
  }

  static getClientAuthHeader(): string {
    return btoa(EnvironmentService.getClientId() + ":" + EnvironmentService.getClientSecret());
  }
}
