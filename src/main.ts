import { Player } from "./player";
import { InputHandler } from "./inputHandler";
import { Food } from "./food";
import { Score } from "./score";

export const defaultMovementKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];

const titleSize = 20;
const totalTitles = 20;

const canvas = document.getElementById("map")! as HTMLCanvasElement;
const context = canvas.getContext("2d")!;
canvas.height = titleSize * totalTitles;
canvas.width = titleSize * totalTitles;

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    isRunning = !isRunning;

    const runningState = document.getElementById("running-state") as HTMLElement;
    runningState.innerText = isRunning ? "" : "JOGO PAUSADO";
  }
})

export let isRunning: boolean = true;


export interface Position {
  x: number,
  y: number
}

export class Game {
  titleSize: number;
  totalTitles: number;

  player: Player;
  food: Food;
  input: InputHandler;
  score: Score;


  constructor(titleSize: number, totalTitles: number) {
    this.titleSize = titleSize;
    this.totalTitles = totalTitles;

    this.player = new Player(this);
    this.food = new Food(this);
    this.input = new InputHandler();
    this.score = new Score();
  }

  update() {
    this.player.update(this.input.key);
    
    if (this.checkFoodCollision()) {
      this.food.randomizeLocation();
      this.score.add();
      this.player.grow();
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.player.draw(context);
    this.food.draw(context);
  }

  checkFoodCollision() {
    const foodPosition = this.food.position;
    const snakePosition = this.player.snake[0];

    return snakePosition.x === foodPosition.x && snakePosition.y === foodPosition.y;
  }
}

const game = new Game(titleSize, totalTitles);

let lastTime = 0;
let speedDelay = 200;

function animate(timestamp: number) {
  const deltaTime = timestamp - lastTime;

  if (isRunning === true) {
    if (deltaTime > speedDelay) {
      lastTime = timestamp;
      context.clearRect(0, 0, canvas.width, canvas.height);
      game.update();
      game.draw(context);
    }
  }

  requestAnimationFrame(animate);
}

animate(0);