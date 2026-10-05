import { TestBed } from '@angular/core/testing';
import { AlmacenamientoService } from './almacenamiento';

describe('Almacenamiento', () => {
  let service: AlmacenamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
