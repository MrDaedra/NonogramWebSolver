import { Cell } from './cell';
import { HintCell } from './hint-cell';

export class Nonogram {
  cells: Cell[][];
  verticalHints: HintCell[][];
  horizontalHints: HintCell[][];
  name: string;
}
