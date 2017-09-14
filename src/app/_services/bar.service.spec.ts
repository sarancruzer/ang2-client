import { TestBed, inject } from '@angular/core/testing';

import { BarService } from './bar.service';

describe('BarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarService]
    });
  });

  it('should ...', inject([BarService], (service: BarService) => {
    expect(service).toBeTruthy();
  }));
});
