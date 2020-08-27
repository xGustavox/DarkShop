import { TestBed } from '@angular/core/testing';

import { AppendComponentService } from './append-component.service';

describe('AppendComponentService', () => {
  let service: AppendComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppendComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
