import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProgramacion244 } from './formulario-programacion-244';

describe('FormularioProgramacion244', () => {
  let component: FormularioProgramacion244;
  let fixture: ComponentFixture<FormularioProgramacion244>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProgramacion244]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProgramacion244);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
