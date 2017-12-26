import { TestBed, inject } from '@angular/core/testing';

import { GuitaristService } from './guitarist.service';

describe('GuitaristService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuitaristService]
    });
  });

  it('should be created', inject([GuitaristService], (service: GuitaristService) => {
    expect(service).toBeTruthy();
  }));
});
