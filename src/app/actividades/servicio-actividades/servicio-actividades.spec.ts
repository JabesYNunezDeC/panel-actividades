import { TestBed } from '@angular/core/testing';
import { ServicioActividades } from './servicio-actividades';

describe('ServicioActividades', () => {
  let service: ServicioActividades;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActividades);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
