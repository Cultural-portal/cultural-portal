import { TestBed } from '@angular/core/testing';

import { RandomAuthorService } from './random-author.service';

describe('RandomAuthorService', () => {
  let service: RandomAuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomAuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
