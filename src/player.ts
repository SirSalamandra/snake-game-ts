import { Game, Position } from "./main";

export class Player {
  game: Game;
  size: number = 20;
  speed: number = 0.25 / 10;

  snake: Array<Position> = [];

  constructor(game: Game) {
    this.game = game;
    this.grow();
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "black";

    this.snake.forEach((body, i) => {
      if (i === 0) {
        context.fillStyle = '#4CAF50';
      }
      else {
        context.fillStyle = "black"
      }


      context.fillRect(
        (body.x * this.game.titleSize) - this.size,
        (body.y * this.game.titleSize) - this.size,
        this.size,
        this.size
      );
    });
  }

  update(key: string) {
    this.updatePosition(key);
  }

  updatePosition(key: string) {
    const head = { ...this.snake[0] };

    switch (key) {
      case "ArrowRight":
        head.x++;
        break;
      case "ArrowLeft":
        head.x--;
        break;
      case "ArrowDown":
        head.y++;
        break;
      case "ArrowUp":
        head.y--;
        break;
    }

    this.snake.unshift(head);
    this.snake.pop();
  }

  grow() {
    if (this.snake.length == 0) {
      this.snake.push({
        x: (this.game.totalTitles / 2),
        y: (this.game.totalTitles / 2)
      });
    }
    else {
      const tail = { ...this.snake[this.snake.length - 1] };
      tail.x = tail.x - this.size
      tail.y = tail.y - this.size
      this.snake.push({ ...tail });
    }
  }

  checkFoodCollision(): boolean {
    const foodPosition = this.game.food.position;
    const headPosition = this.snake[0];

    return headPosition.x === foodPosition.x;
  }
}