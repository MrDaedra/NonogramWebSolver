import { CellState } from './cell-state.enum';
import { Cell } from './cell';

export class CellViewModel {
  state: CellState = CellState.Empty;
  model: Cell;

  constructor (cell: Cell) {
    this.state = CellState.Empty;
    this.model = cell;
  }

  setState(state: CellState): void {
    if (this.state !== state) {
      this.state = state;
      this.model.setState(state);
    }
  }
}
