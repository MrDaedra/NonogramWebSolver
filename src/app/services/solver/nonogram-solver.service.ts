import { Injectable } from '@angular/core';
import { Nonogram } from 'src/app/models/nonogram';

@Injectable({
  providedIn: 'root'
})
export class NonogramSolverService {
  constructor() { }

  startSolving(viewModel: Nonogram): void {
    throw new Error("Method not implemented.");
  }
}
