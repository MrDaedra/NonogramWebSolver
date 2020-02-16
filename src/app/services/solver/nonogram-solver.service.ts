import { Injectable } from '@angular/core';
import { NonogramViewModel } from 'src/app/models/nonogram-view-model';

@Injectable({
  providedIn: 'root'
})
export class NonogramSolverService {
  constructor() { }

  startSolving(viewModel: NonogramViewModel): void {
    throw new Error("Method not implemented.");
  }
}
