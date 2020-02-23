import { Injectable } from '@angular/core';
import { CellState } from '../models/cell-state.enum';
import { CellViewModel } from '../models/cell-view-model';
import { Cell } from '../models/cell';

@Injectable({
  providedIn: 'root'
})
export class CellStateManagerService {

  constructor() { }

  updateState(cell: Cell): void {
    switch (cell.state) {
      case CellState.Empty:
        cell.setState(CellState.Filled);
        break;
      case CellState.Filled:
        cell.setState(CellState.Skipped);
        break;
      case CellState.Skipped:
        cell.setState(CellState.Empty);
        break;

      default:
        cell.setState(CellState.Empty);
        break;
    }
  }
}
