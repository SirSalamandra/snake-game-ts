import { Game, Position } from "./main";

export class Food {
  game: Game;

  position: Position;
  size: number = 20;
  color: string = "red";

  constructor(game: Game) {
    this.game = game;

    this.position = {
      x: Math.round(Math.random() * this.game.totalTitles),
      y: Math.round(Math.random() * this.game.totalTitles)
    }

    console.log(`food: (${this.position.x}, ${this.position.y})`)
  }

  randomizeLocation() {
    

    this.position = {
      x: Math.round(Math.random() * this.game.totalTitles),
      y: Math.round(Math.random() * this.game.totalTitles)
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.fillRect(
      (this.position.x * this.game.titleSize) - this.size, 
      (this.position.y * this.game.titleSize) - this.size, 
      this.size, 
      this.size
    );
  }
}