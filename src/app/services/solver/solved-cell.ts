import { Cell } from 'src/app/models/cell';

export class SolvedCell {
  constructor(originalCell: Cell) {
    this.originalCell = originalCell;
  }

  originalCell: Cell;
  straightTurnBlockId: number;
  reverseTurnBlockId: number;
}
