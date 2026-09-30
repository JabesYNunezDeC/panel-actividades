import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaActividades } from './targeta-actividades';

describe('TargetaActividades', () => {
  let component: TargetaActividades;
  let fixture: ComponentFixture<TargetaActividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaActividades],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaActividades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
