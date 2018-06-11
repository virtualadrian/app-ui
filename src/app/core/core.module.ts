import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnvironmentService } from "@app/core/environment.service";
import { PathParamService } from "@app/core/path-param.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [EnvironmentService, PathParamService]
})
export class CoreModule { }
