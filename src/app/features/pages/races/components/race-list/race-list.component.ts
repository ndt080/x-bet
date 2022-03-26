import { Component, Input } from "@angular/core";
import { Race } from "@core/models";

@Component({
  selector: 'race-list, [race-list]',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent {
  @Input() items: Race[] = [];
  activeItem = -1;

  onItemClick(index: number) {
    this.activeItem = this.activeItem == index ? -1: index;
  }
}
