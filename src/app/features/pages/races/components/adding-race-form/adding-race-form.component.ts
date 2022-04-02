import { Component } from "@angular/core";
import { RaceDataService } from "@features/pages/races/services/race-data.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TemplateHorseData } from "@features/pages/races/consts/template-horse-data.const";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Race } from "@core/models";
import * as moment from "moment";


@Component({
  selector: "adding-race-form, [adding-race-form]",
  templateUrl: "./adding-race-form.component.html",
  styleUrls: ["./adding-race-form.component.scss"],
})
export class AddingRaceFormComponent {
  horses = TemplateHorseData;

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: "id",
    textField: "name",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };

  form: FormGroup = new FormGroup({
    date: new FormControl("", [Validators.required]),
    time: new FormControl("", [Validators.required]),
    track: new FormControl("", [Validators.required]),
    participants: new FormControl([], [Validators.required, Validators.minLength(3)]),
  });

  constructor(private raceDataService: RaceDataService) {}

  onSubmit() {
    const formData = this.form.value;
    const date = moment(formData.date, 'YYYY-MM-DD');
    const time = moment(formData.time, 'HH:mm');
    date.set({'hours': time.get('hours'), 'minutes': time.get('minutes')});

    this.raceDataService.setRaceWithoutId({
      date: date.toDate(),
      track: formData.track,
      participants: formData.participants,
    } as Race);
  }
}
