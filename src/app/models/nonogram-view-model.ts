import { CellViewModel } from './cell-view-model';
import { HintCellViewModel } from './hint-cell-view-model';

export class NonogramViewModel {
  cells: CellViewModel[][];
  verticalHints: HintCellViewModel[][];
  horizontalHints: HintCellViewModel[][];
  name: string;
}
