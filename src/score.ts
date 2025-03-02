export class Score {
  score: number = 0;
  scoreEl: HTMLElement;

  constructor() {
    this.scoreEl = document.getElementById("score")!;
    this.scoreEl.innerText = this.score.toString();
  }
  
  add() {
    this.score++;
    this.scoreEl.innerText = this.score.toString();
  }

  reset() {
    this.score = 0
    this.scoreEl.innerText = this.score.toString();
  }
}