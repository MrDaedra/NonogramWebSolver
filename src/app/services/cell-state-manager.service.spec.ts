import { TestBed } from '@angular/core/testing';

import { CellStateManagerService } from './cell-state-manager.service';

describe('CellStateManagerService', () => {
  let service: CellStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
