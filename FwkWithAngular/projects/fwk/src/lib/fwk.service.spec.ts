import { TestBed } from '@angular/core/testing';

import { FwkService } from './fwk.service';

describe('FwkService', () => {
  let service: FwkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FwkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
