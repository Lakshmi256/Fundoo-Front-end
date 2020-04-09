import { TestBed } from '@angular/core/testing';

import { ViewserviceService } from './viewservice.service';

describe('ViewserviceService', () => {
  let service: ViewserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
