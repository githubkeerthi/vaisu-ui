import { TestBed } from '@angular/core/testing';

import { StockGroupService } from './stock-group.service';

describe('StockGroupService', () => {
  let service: StockGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
