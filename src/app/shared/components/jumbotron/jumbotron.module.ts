import { NgModule } from "@angular/core";
import { JumbotronComponent } from "@shared/components/jumbotron/jumbotron.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [JumbotronComponent],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    JumbotronComponent,
  ],
})
export class JumbotronModule {}
