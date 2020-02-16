import { Injectable } from '@angular/core';
import { CellState } from '../models/cell-state.enum';
import { CellViewModel } from '../models/cell-view-model';

@Injectable({
  providedIn: 'root'
})
export class CellStateManagerService {

  constructor() { }

  updateState(cell: CellViewModel): void {
    switch (cell.state) {
      case CellState.Empty:
        cell.state = CellState.Filled;
        break;
      case CellState.Filled:
        cell.state = CellState.Skipped;
        break;
      case CellState.Skipped:
        cell.state = CellState.Empty;
        break;

      default:
        cell.state = CellState.Empty;
        break;
    }
  }
}
