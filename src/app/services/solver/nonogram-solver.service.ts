import { Injectable } from '@angular/core';
import { Nonogram } from 'src/app/models/nonogram';
import { CellState } from 'src/app/models/cell-state.enum';

@Injectable({
  providedIn: 'root'
})
export class NonogramSolverService {
  constructor() { }

  startSolving(model: Nonogram): void {
    throw new Error("Method not implemented.");
  }
}
