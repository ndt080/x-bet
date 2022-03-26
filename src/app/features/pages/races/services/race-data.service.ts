import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Race } from "@core/models";
import { TemplateRaceData } from "../consts/template-race-data.const";

@Injectable()
export class RaceDataService {
  private raceData = new BehaviorSubject<Race[]>([]);

  get races$(): Observable<Race[]> {
    return this.raceData.asObservable();
  }

  get races(): Race[] {
    return this.raceData.value;
  }

  constructor() {
    this.setRaces(TemplateRaceData)
  }

  setRaces(races: Race[]) {
    this.raceData.next([...races, ...this.races]);
  }

  setRaceWithoutId(race: Race) {
    const currData = this.races;
    race.id = currData.length.toString();
    this.raceData.next([race, ...this.races]);
  }
}
