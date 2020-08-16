import { TestBed } from '@angular/core/testing';

import { NonoService } from './nono.service';

describe('NonoService', () => {
  let service: NonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
