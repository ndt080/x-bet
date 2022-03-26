import { Horse } from "./horse.model";

export interface Race {
  id?: string;
  date: Date;
  track: number;
  participants: Horse[];
  winner?: Horse;
}
