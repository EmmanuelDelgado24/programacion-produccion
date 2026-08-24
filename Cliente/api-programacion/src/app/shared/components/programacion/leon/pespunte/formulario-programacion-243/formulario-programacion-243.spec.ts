import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProgramacion243 } from './formulario-programacion-243';

describe('FormularioProgramacion243', () => {
  let component: FormularioProgramacion243;
  let fixture: ComponentFixture<FormularioProgramacion243>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProgramacion243]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProgramacion243);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
