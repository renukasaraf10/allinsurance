import { TestBed } from '@angular/core/testing';

import { FsdService } from './fsd.service';

describe('FsdService', () => {
  let service: FsdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
