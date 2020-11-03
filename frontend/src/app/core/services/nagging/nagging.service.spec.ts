import { TestBed } from '@angular/core/testing';

import { NaggingService } from './nagging.service';

describe('NaggingService', () => {
  let service: NaggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
