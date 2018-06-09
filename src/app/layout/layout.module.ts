import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeadNavigationComponent } from "./head-navigation/head-navigation.component";
import { LayoutRoutingModule } from "@app/layout/layout-routing.module";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [HeadNavigationComponent, FooterComponent],
  exports: [HeadNavigationComponent, FooterComponent]
})
export class LayoutModule { }
