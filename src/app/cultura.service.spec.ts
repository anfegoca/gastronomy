import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute

import { CulturaService } from './cultura.service';

describe('CulturaService', () => {
  let service: CulturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // Proporciona una instancia vacía de ActivatedRoute
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    });

    service = TestBed.inject(CulturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of cultures', () => {
    const culturas = service.getCulturas();
    expect(culturas).toBeDefined();
    console.log(culturas);
    expect(culturas.length).toBeGreaterThan(0);
  });
});
