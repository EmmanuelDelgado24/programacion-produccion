import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProgramacion } from './formulario-programacion';

describe('FormularioProgramacion', () => {
  let component: FormularioProgramacion;
  let fixture: ComponentFixture<FormularioProgramacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProgramacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProgramacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
