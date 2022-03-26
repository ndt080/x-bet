import { NgModule } from "@angular/core";
import { NavigationBarComponent } from "./navigation-bar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    RouterModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    NavigationBarComponent,
  ],
})
export class NavigationBarModule {}
