import { Injectable } from '@angular/core';
import { Nonogram } from '../models/Nonogram';
import { NonogramViewModel } from '../models/nonogram-view-model';
import { CellViewModel } from '../models/cell-view-model';
import { HintCellViewModel } from '../models/hint-cell-view-model';

@Injectable({
  providedIn: 'root'
})
export class ModelConverterService {

  constructor() { }

  convertModel(model: Nonogram): NonogramViewModel {
    let horizontalHintLength = this.getDimensionLength(model.horizontal);
    let verticalHintLength = this.getDimensionLength(model.vertical)

    return {
      cells: this.generateCells(model.horizontal.length, model.vertical.length),
      verticalHints: this.getHintCells(model.vertical, verticalHintLength),
      horizontalHints: this.getHintCells(model.horizontal, horizontalHintLength)
    }
  }

  getHintCells(hintCellArray: string[][], dimensionLength: number): HintCellViewModel[][] {
    let cellsViewModel: HintCellViewModel[][] = [];

    for (let i = 0; i < hintCellArray.length; i++) {
      const hintRow = hintCellArray[i];
      this.padRow(hintRow, dimensionLength);
      let rowViewModel: HintCellViewModel[] = [];

      for (let j = 0; j < hintRow.length; j++) {
        const hintValue = hintRow[j];
        rowViewModel.push(new HintCellViewModel(Number(hintValue)));
      }
      cellsViewModel.push(rowViewModel);
    }

    return cellsViewModel;
  }

  padRow(hintRow: string[], length: number): void {
    if (hintRow.length < length) {
      hintRow.unshift(null);
      this.padRow(hintRow, length);
    }
  }

  generateCells(horizontalLength: number, verticalLength: number): CellViewModel[][] {
    let cells = [];
    for (let i = 0; i < verticalLength; i++) {
      let row = [];
      for (let j = 0; j < horizontalLength; j++) {
        row.push(new CellViewModel());
      }
      cells.push(row);
    }

    return cells;
  }

  getDimensionLength(dimensionArray: string[][]): number {
    let max = 0;
    dimensionArray.forEach(element => {
      if (element.length > max) {
        max = element.length;
      }
    });

    return max;
  }
}
