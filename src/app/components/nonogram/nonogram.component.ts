import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Nonogram } from 'src/app/models/Nonogram';
import { ActivatedRoute } from '@angular/router';
import { NonogramViewModel } from 'src/app/models/nonogram-view-model';
import { ModelConverterService } from 'src/app/services/model-converter.service';
import { CellState } from 'src/app/models/cell-state.enum';
import { CellViewModel } from 'src/app/models/cell-view-model';
import { CellStateManagerService } from 'src/app/services/cell-state-manager.service';
import { NonogramSolverService } from 'src/app/services/solver/nonogram-solver.service';

@Component({
  selector: 'app-nonogram',
  templateUrl: './nonogram.component.html',
  styleUrls: ['./nonogram.component.scss']
})
export class NonogramComponent implements OnInit {

  constructor(private fileService: FileService,
              private route: ActivatedRoute,
              private modelConverter: ModelConverterService,
              private cellStateManager: CellStateManagerService,
              private solvingService: NonogramSolverService) { }

  nonogramModel: Nonogram;
  nonogramViewModel: NonogramViewModel;
  CellState = CellState;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nonogramModel = this.fileService.getNonogramById(id);
    this.nonogramViewModel = this.modelConverter.convertModel(this.nonogramModel);
  }

  updateCell(cell: CellViewModel): void {
    this.cellStateManager.updateState(cell);
  }

  startSolving(): void {
    this.solvingService.startSolving(this.nonogramViewModel);
  }
}
