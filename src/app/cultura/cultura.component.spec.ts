import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { CulturaComponent } from './cultura.component';

describe('CulturaComponent', () => {
  let component: CulturaComponent;
  let fixture: ComponentFixture<CulturaComponent>;

  // Crea una instancia simulada de ActivatedRoute
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (param: string) => '123', // Simula el valor que esperas recibir desde la ruta
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CulturaComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }, // Inyecta ActivatedRoute simulado
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega más pruebas aquí
});
