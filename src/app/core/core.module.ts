import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnvironmentService } from "@app/core/environment.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [EnvironmentService]
})
export class CoreModule { }
