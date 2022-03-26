import { User } from "./user.model";
import { Race } from "./race.model";
import { Horse } from "./horse.model";

export interface Bet {
  id: string;
  client: User;
  race: Race;
  horse: Horse;
  amount: number;
  coefficient: number;
  createdAt: Date;
}


