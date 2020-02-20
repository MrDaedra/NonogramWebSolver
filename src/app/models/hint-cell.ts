import { BlockState } from './block-state.enum';

export class HintCell {
  constructor(value: number) {
    this.value = value;
    this.blockState = BlockState.Imcomplete;
  }

  value: number;
  blockState: BlockState;
}
