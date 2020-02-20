import { Injectable } from '@angular/core';
import sample1 from '../data/1.json';
import sample2 from '../data/2.json';
import { NonogramMetadata } from '../models/nonogram-metadata.js';
import { NonogramDto } from '../models/nonogram-dto';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  getNonograms(): Array<NonogramMetadata> {
    return [
      { id: "1", name: "Sample 1" },
      { id: "2", name: "Sample 2" }
     ];
  }

  getNonogramById(id: number): NonogramDto {
    switch (id) {
      case 1:
        return sample1 as NonogramDto;
      case 2:
        return sample2 as NonogramDto;
      default:
        return null;
    }
  }
}
