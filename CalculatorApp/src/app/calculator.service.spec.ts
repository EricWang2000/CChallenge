import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { provideHttpClient } from '@angular/common/http';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        provideHttpClient()
      ]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(CalculatorService);
    expect(service).toBeTruthy();
  });
});