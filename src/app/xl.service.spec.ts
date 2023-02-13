import { TestBed } from '@angular/core/testing';

import { XlService } from './xl.service';

describe('XlService', () => {
  let service: XlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
