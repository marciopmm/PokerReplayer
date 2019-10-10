import { TestBed } from '@angular/core/testing';

import { TextProcessorService } from './text-processor.service';

describe('TextProcessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextProcessorService = TestBed.get(TextProcessorService);
    expect(service).toBeTruthy();
  });
});
