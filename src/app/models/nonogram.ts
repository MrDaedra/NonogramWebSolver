import { NonogramMetadata } from './nonogram-metadata';

export interface Nonogram extends NonogramMetadata {
  vertical: string[][];
  horizontal: string[][];
}
