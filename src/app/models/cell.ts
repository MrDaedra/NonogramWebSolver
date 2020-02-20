import { CellState } from './cell-state.enum';

export class Cell {
  setStateCallbacks: Array<(value: CellState) => void> = [];
  state: CellState
  positionX: number;
  positionY: number;

  constructor () {
    this.state = CellState.Empty;
  }

  setState(state: CellState): void {
    if (this.state  !== state) {
      this.state = state;
      this.setStateCallbacks.forEach(callback=> {
        callback(state);
      });
    }
  }

  onSetState(callback: (value: CellState) => void) {
    this.setStateCallbacks.push(callback);
  }
}
