import { CellViewModel } from 'src/app/models/cell-view-model';

export class SolvedCell {
  constructor(originalCell: CellViewModel) {
    this.originalCell = originalCell;
  }

  originalCell: CellViewModel;
  straightTurnBlockId: number;
  reverseTurnBlockId: number;
}
