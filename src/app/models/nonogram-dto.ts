import { NonogramMetadata } from './nonogram-metadata';

export interface NonogramDto extends NonogramMetadata {
  vertical: string[][];
  horizontal: string[][];
}
