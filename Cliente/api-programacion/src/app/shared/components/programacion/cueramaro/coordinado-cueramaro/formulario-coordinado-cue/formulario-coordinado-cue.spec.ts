import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCoordinadoCue } from './formulario-coordinado-cue';

describe('FormularioCoordinadoCue', () => {
  let component: FormularioCoordinadoCue;
  let fixture: ComponentFixture<FormularioCoordinadoCue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCoordinadoCue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCoordinadoCue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
