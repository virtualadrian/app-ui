import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeadNavigationComponent } from "./head-navigation/head-navigation.component";
import { LayoutRoutingModule } from "@app/layout/layout-routing.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [HeadNavigationComponent],
  exports: [HeadNavigationComponent]
})
export class LayoutModule { }
