import { Game } from "./main";

export class Player {
  game: Game;
  x: number;
  y: number;
  height: number = 20;
  width: number = 20;
  speed: number = 2;

  constructor(game: Game) {
    this.game = game;

    this.x = this.game.height / 2 - this.height / 2;
    this.y = this.game.width / 2 - this.width / 2;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update(key: string) {
    switch (key) {
      case "ArrowRight":
        this.x += this.speed;
        break;
      case "ArrowLeft":
        this.x -= this.speed;
        break;
      case "ArrowDown":
        this.y += this.speed;
        break;
      case "ArrowUp":
        this.y -= this.speed;
        break;
    }

    if (this.x < 0 || this.x > this.game.height - this.height) {
      alert("game over 1");

      this.x = this.game.height / 2 - this.height / 2;
      this.y = this.game.width / 2 - this.width / 2;
    }

    if (this.y < 0 || this.y > this.game.width - this.width) {
      alert("game over 2");
      
      this.x = this.game.height / 2 - this.height / 2;
      this.y = this.game.width / 2 - this.width / 2;
    }
  }
}