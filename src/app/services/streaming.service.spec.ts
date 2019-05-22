import { TestBed } from '@angular/core/testing';

import { StreamingService } from './streaming.service';

describe('StreamingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreamingService = TestBed.get(StreamingService);
    expect(service).toBeTruthy();
  });
});
