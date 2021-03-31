export class Game {
  userName: string
  points: number;
  pointsToWin: number;
  constructor() {
    this.userName = '';
    this.points = 0;
    this.pointsToWin = 100;
  }

  public getPoints(): number {
    console.log(`Количество ваших баллов ${this.points}`);
    return this.points;
  }

  public addPoints(points: number): void {
    this.points = this.points + points;
  }

}
