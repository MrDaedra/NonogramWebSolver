import { Cell } from './cell';
import { HintCell } from './hint-cell';

export class Nonogram {
  cells: Cell[][];
  verticalHints: HintCell[][];
  horizontalHints: HintCell[][];
  name: string;

  getRow(index: number): Cell[] {
    return this.cells[index];
  }

  getColumn(index: number): Cell[] {
    return this.cells.map(row => {
      return row[index];
    });
  }
}
