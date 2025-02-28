import { Player } from "./player";
import { InputHandler } from "./inputHandler";

export const defaultMovementKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];

const canvas = document.getElementById("map")! as HTMLCanvasElement;
const context = canvas.getContext("2d")!;
canvas.height = 500;
canvas.width = 500;

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    isRunning = !isRunning;

    const runningState = document.getElementById("running-state") as HTMLElement;
    runningState.innerText = isRunning ? "" : "JOGO PAUSADO";
  }
})

export let isRunning: boolean = true;

export class Game {
  height: number;
  width: number;

  player: Player;
  input: InputHandler;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;

    this.player = new Player(this);
    this.input = new InputHandler();
  }

  update() {
    this.player.update(this.input.key);
  }

  draw(context: CanvasRenderingContext2D) {
    this.player.draw(context);
  }
}

const game = new Game(canvas.height, canvas.width);

function animate() {
  if (isRunning === true) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(context);
  }

  requestAnimationFrame(animate);
}

animate();