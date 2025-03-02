import { defaultMovementKeys, isRunning } from "./main";

export class InputHandler {
  key: string = "ArrowDown"//defaultMovementKeys[Math.floor(Math.random() * 4)];

  constructor() {
    window.addEventListener('keydown', (event) => {
      if (isRunning === false) return;

      if (defaultMovementKeys.includes(event.key)) {
        this.key = event.key;
      }
    });
  }
}