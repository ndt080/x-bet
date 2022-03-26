import { Race } from "@core/models";
import { TemplateHorseData } from "./template-horse-data.const";

const horses = TemplateHorseData;

export const TemplateRaceData: Race[] = [
  {
    id: '0',
    date: new Date('2022-03-23 12:20:05'),
    track: 1,
    participants: [horses[0], horses[1], horses[3], horses[5]]
  } as Race,
  {
    id: '1',
    date: new Date('2022-03-23 14:40:05'),
    track: 2,
    participants: [horses[1], horses[2], horses[3], horses[4]]
  } as Race,
  {
    id: '2',
    date: new Date('2022-03-23 15:30:05'),
    participants: [horses[0], horses[1], horses[4], horses[5]]
  } as Race,
  {
    id: '3',
    date: new Date('2022-03-23 17:20:05'),
    track: 1,
    participants: [horses[0], horses[2], horses[4], horses[5]]
  } as Race,
  {
    id: '4',
    date: new Date('2022-03-24 10:00:05'),
    track: 1,
    participants: [horses[2], horses[3], horses[4], horses[5]]
  } as Race,
  {
    id: '5',
    date: new Date('2022-03-24 12:20:05'),
    track: 2,
    participants: [horses[1], horses[2], horses[3], horses[4]]
  } as Race,
  {
    id: '6',
    date: new Date('2022-03-24 15:30:05'),
    track: 2,
    participants: [horses[0], horses[1], horses[3], horses[5]]
  } as Race,
  {
    id: '7',
    date: new Date('2022-03-25 11:30:05'),
    track: 1,
    participants: [horses[1], horses[3], horses[4], horses[5]]
  } as Race,
  {
    id: '8',
    date: new Date('2022-03-25 14:10:05'),
    track: 2,
    participants: [horses[0], horses[1], horses[3], horses[4]]
  } as Race,
  {
    id: '9',
    date: new Date('2022-03-25 16:15:05'),
    track: 2,
    participants: [horses[0], horses[2], horses[3], horses[4]]
  } as Race,
]
