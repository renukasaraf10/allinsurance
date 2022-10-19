import { TestBed } from '@angular/core/testing';

import { DatcomService } from './datcom.service';

describe('DatcomService', () => {
  let service: DatcomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatcomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
