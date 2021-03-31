import { IAnswer } from "./interfaces";

export class Level {
  number: number;
  title: string;
  question: string;
  answers: IAnswer[];

  constructor(
    number: number,
    title: string,
    question: string,
    answers: IAnswer[],
  ) {
    this.number = number;
    this.title = title;
    this.question = question;
    this.answers = answers;
  }
}
