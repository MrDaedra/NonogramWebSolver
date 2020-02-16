import { CellState } from './cell-state.enum';

export class CellViewModel {
  constructor () {
    this.state = CellState.Empty;
  }

  state: CellState
}
