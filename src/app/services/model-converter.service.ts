import { Injectable } from '@angular/core';
import { Nonogram } from '../models/nonogram';
import { Cell } from '../models/cell';
import { HintCell } from '../models/hint-cell';
import { NonogramDto } from '../models/nonogram-dto';
import { NonogramViewModel } from '../models/nonogram-view-model';
import { HintCellViewModel } from '../models/hint-cell-view-model';
import { CellViewModel } from '../models/cell-view-model';

@Injectable({
  providedIn: 'root'
})
export class ModelConverterService {

  constructor() { }

  convertDto(dto: NonogramDto): Nonogram {
    let horizontalHintLength = this.getDimensionLength(dto.horizontal);
    let verticalHintLength = this.getDimensionLength(dto.vertical)

    return Object.assign(new Nonogram(), {
      cells: this.generateCells(dto.horizontal.length, dto.vertical.length),
      verticalHints: this.getHintCells(dto.vertical, verticalHintLength),
      horizontalHints: this.getHintCells(dto.horizontal, horizontalHintLength),
      name: dto.name
    });
  }

  convertModel(model: Nonogram): NonogramViewModel {
    return {
      cells: this.getViewModelCells(model.cells),
      horizontalHints: this.getViewModelHintCells(model.horizontalHints),
      verticalHints: this.getViewModelHintCells(model.verticalHints),
      name: model.name
    };
  }

  private getViewModelHintCells(cells: HintCell[][]): HintCellViewModel[][] {
    let hintCells: HintCellViewModel[][] = [];
    for (let i = 0; i < cells.length; i++) {
      const row = cells[i];
      let viewModelRow: HintCellViewModel[] = [];
      for (let j = 0; j < row.length; j++) {
        let hintCell = row[j];
        let hintCellViewModel = new HintCellViewModel(hintCell.value);
        viewModelRow.push(hintCellViewModel);
      }
      hintCells.push(viewModelRow);
    }
    return hintCells;
  }

  private getViewModelCells(cells: Cell[][]): CellViewModel[][] {
    let hintCells: CellViewModel[][] = [];
    for (let i = 0; i < cells.length; i++) {
      const row = cells[i];
      let viewModelRow: CellViewModel[] = [];
      for (let j = 0; j < row.length; j++) {
        let cell = row[j];
        let cellViewModel = new CellViewModel(cell);
        cell.onSetState(state => {
          cellViewModel.setState(state);
        });
        viewModelRow.push(cellViewModel);
      }
      hintCells.push(viewModelRow);
    }
    return hintCells;
  }

  private getHintCells(hintCellArray: string[][], dimensionLength: number): HintCell[][] {
    let cellsViewModel: HintCell[][] = [];

    for (let i = 0; i < hintCellArray.length; i++) {
      const hintRow = hintCellArray[i];
      this.padRow(hintRow, dimensionLength);
      let rowViewModel: HintCell[] = [];

      for (let j = 0; j < hintRow.length; j++) {
        const hintValue = hintRow[j];
        rowViewModel.push(new HintCell(Number(hintValue)));
      }
      cellsViewModel.push(rowViewModel);
    }

    return cellsViewModel;
  }

  private padRow(hintRow: string[], length: number): void {
    if (hintRow.length < length) {
      hintRow.unshift(null);
      this.padRow(hintRow, length);
    }
  }

  private generateCells(horizontalLength: number, verticalLength: number): Cell[][] {
    let cells = [];
    for (let i = 0; i < verticalLength; i++) {
      let row = [];
      for (let j = 0; j < horizontalLength; j++) {
        row.push(new Cell());
      }
      cells.push(row);
    }

    return cells;
  }

  private getDimensionLength(dimensionArray: string[][]): number {
    let max = 0;
    dimensionArray.forEach(element => {
      if (element.length > max) {
        max = element.length;
      }
    });

    return max;
  }
}
