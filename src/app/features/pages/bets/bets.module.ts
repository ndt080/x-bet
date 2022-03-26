import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BetsComponent } from "@features/pages/bets/bets.component";
import { BetsRoutingModule } from "@features/pages/bets/bets-routing.module";


@NgModule({
  declarations: [BetsComponent],
  imports: [
    CommonModule,
    BetsRoutingModule,
  ],
})
export class BetsModule {
}
