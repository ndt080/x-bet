import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RacesRoutingModule } from "./races-routing.module";
import { RacesComponent } from "./races.component";
import { JumbotronModule } from "@shared/components/jumbotron/jumbotron.module";
import { RaceDataService } from "./services/race-data.service";
import { RaceListComponent } from "./components/race-list/race-list.component";
import { RaceDetailsComponent } from "./components/race-details/race-details.component";
import { AddingRaceFormComponent } from "./components/adding-race-form/adding-race-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";


@NgModule({
  declarations: [RacesComponent, RaceListComponent, RaceDetailsComponent, AddingRaceFormComponent],
  imports: [
    CommonModule,
    RacesRoutingModule,
    JumbotronModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [RaceDataService]
})
export class RacesModule {
}
