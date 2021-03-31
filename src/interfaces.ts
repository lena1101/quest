import { Level } from './level'

export interface IAnswer {
  number: number;
  answer: string;
  points: number;
}
export interface ILevel extends Level {}
