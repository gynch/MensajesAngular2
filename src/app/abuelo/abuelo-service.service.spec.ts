import { TestBed, inject } from '@angular/core/testing';

import { AbueloServiceService } from './abuelo-service.service';

describe('AbueloServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbueloServiceService]
    });
  });

  it('should be created', inject([AbueloServiceService], (service: AbueloServiceService) => {
    expect(service).toBeTruthy();
  }));
});
