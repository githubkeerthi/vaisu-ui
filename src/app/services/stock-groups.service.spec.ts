import { TestBed } from '@angular/core/testing';

import { StockGroupsService } from './stock-groups.service';

describe('StockGroupsService', () => {
  let service: StockGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
