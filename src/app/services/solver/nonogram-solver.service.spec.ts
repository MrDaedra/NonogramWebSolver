import { TestBed } from '@angular/core/testing';

import { NonogramSolverService } from './nonogram-solver.service';

describe('NonogramSolverService', () => {
  let service: NonogramSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonogramSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
