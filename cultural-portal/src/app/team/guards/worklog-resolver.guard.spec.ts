import { TestBed } from '@angular/core/testing';

import { WorklogResolverGuard } from './worklog-resolver.guard';

describe('WorklogResolverGuard', () => {
  let guard: WorklogResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorklogResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
