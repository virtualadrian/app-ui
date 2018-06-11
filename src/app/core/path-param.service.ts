import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class PathParamService {

  private route: ActivatedRoute;

  constructor() {
  }

  set(current: ActivatedRoute) {
    this.route = current;
  }

  get(key: string) {
    return this.route.snapshot.paramMap.get(key);
  }
}
