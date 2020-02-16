import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { NonogramMetadata } from 'src/app/models/nonogram-metadata';

@Component({
  selector: 'app-puzzle-list',
  templateUrl: './puzzle-list.component.html',
  styleUrls: ['./puzzle-list.component.scss']
})
export class PuzzleListComponent implements OnInit {

  constructor(private fileService: FileService) { }

  nonongrams: Array<NonogramMetadata>;

  ngOnInit(): void {
    this.nonongrams = this.fileService.getNonograms();
  }
}
