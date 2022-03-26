import { Component, OnDestroy, OnInit } from "@angular/core";
import { RaceDataService } from "./services/race-data.service";
import { Subject } from "rxjs";
import { Race } from "@core/models";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "race-page",
  templateUrl: "./races.component.html",
  styleUrls: ["./races.component.scss"],
})
export class RacesComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  raceData: Race[] = [];

  constructor(private raceDataService: RaceDataService) {}

  ngOnInit() {
    this.raceDataService.races$.pipe(takeUntil(this.destroy)).subscribe(races => {
      this.raceData = races;
    });
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }
}
