import { TestBed } from '@angular/core/testing';

import { ForpraService } from './forpra.service';

describe('ForpraService', () => {
  let service: ForpraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForpraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
