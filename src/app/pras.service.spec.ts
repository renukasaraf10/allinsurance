import { TestBed } from '@angular/core/testing';

import { PrasService } from './pras.service';

describe('PrasService', () => {
  let service: PrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
