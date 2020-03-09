import { TestBed } from '@angular/core/testing';

import { WorklogService } from './worklog.service';

describe('WorklogService', () => {
  let service: WorklogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorklogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
