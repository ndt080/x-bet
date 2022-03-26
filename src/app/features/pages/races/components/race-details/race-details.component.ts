import { Component, Input } from "@angular/core";
import { Race } from "@core/models";

@Component({
  selector: 'race-details, [race-details]',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss']
})
export class RaceDetailsComponent {
  @Input() race: Race = {} as Race;
}
