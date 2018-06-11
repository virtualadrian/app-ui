import { Injectable } from "@angular/core";

@Injectable()
export class EnvironmentService {

  constructor() { }

  static getEndpoint(relativePath: string): string {
    return window["environment"].serverUrl + relativePath;
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
